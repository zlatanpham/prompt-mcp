# Prompt MCP

This is a project that utilizes the Model Context Protocol (MCP).

## Server configuration

```json
{
  "mcpServers": {
    "mcp-prompt": {
      "command": "npx",
      "args": ["-y", "@x-mcp/prompt@latest"],
      "env": {
        "API_URL": "",
        "API_KEY": ""
      }
    }
  }
}
```

## License

MIT
