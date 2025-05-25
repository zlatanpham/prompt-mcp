import { FastMCP } from 'fastmcp';
import { z } from 'zod';

import codingTools from './config/coding.js';
import generalTools from './config/general.js';
import learningTools from './config/learning.js';
import requirementTools from './config/requirement.js';
import writingTools from './config/writing.js';

const tools = [
  ...writingTools,
  ...codingTools,
  ...requirementTools,
  ...generalTools,
  ...learningTools,
];

const server = new FastMCP({
  name: 'prompt-mcp',
  version: '1.0.0',
});

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
      tool.args.reduce(
        (acc, arg) => {
          acc[arg.name] = z.string().describe(arg.description);
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
