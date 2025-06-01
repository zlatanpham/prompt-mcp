#!/usr/bin/env node
import dotenv from 'dotenv';
import { FastMCP } from 'fastmcp';
import { z } from 'zod';
dotenv.config();

interface Tool {
  args?: Array<{
    description: string;
    name: string;
    type: string;
  }>;
  description: string;
  id: string;
  name: string;
  prompt: string;
}

async function init() {
  const server = new FastMCP({
    name: 'prompt-mcp',
    version: '1.0.1',
  });

  const tools = await loadTools();

  tools.forEach(tool => {
    server.addTool({
      description: tool.description,
      execute: async args => {
        return tool.prompt.replace(/{(\w+)}/g, (_, key) => {
          if (key in args) {
            return args[key];
          }
          return `{${key}}`;
        });
      },
      name: tool.name,
      parameters: z.object(
        (tool.args || []).reduce(
          (acc, arg) => {
            acc[arg.name] =
              arg.type === 'string'
                ? z.string().describe(arg.description)
                : z.number().describe(arg.description);
            return acc;
          },
          {} as Record<string, z.ZodTypeAny>,
        ),
      ),
    });
  });

  server.addResource({
    async load() {
      return {
        text: 'Example log content',
      };
    },
    mimeType: 'text/plain',
    name: 'Application Logs',
    uri: 'file:///logs/app.log',
  });

  // Start the server
  async function main() {
    try {
      await server.start({
        transportType: 'stdio',
      });
    } catch (error) {
      console.error('Failed to start server:', error);
      process.exit(1);
    }
  }

  main().catch(error => {
    console.error('Fatal error in main():', error);
    process.exit(1);
  });
}

async function loadTools() {
  const API_URL = process.env.API_URL;
  const API_KEY = process.env.API_KEY;
  if (!API_URL || !API_KEY) {
    throw new Error('API_URL and API_KEY environment variables must be set');
  }
  const response = await fetch(API_URL, {
    headers: {
      'x-api-key': API_KEY,
    },
    method: 'GET',
  });
  if (!response.ok) {
    throw new Error(`Failed to fetch tools: ${response.statusText}`);
  }
  const tools = await response.json();

  return tools as Tool[];
}

init().catch(error => {
  console.error('Initialization failed:', error);
  process.exit(1);
});
