# TwexAPI MCP setup

Connect MCP clients to `https://api.twexapi.io/mcp`.

Auth: `x-api-key` header or `Authorization: Bearer <X_API_SCRAPER_KEY>`. Unauthenticated requests return `401`.

Create a key at https://twexapi.io/dashboard.

## Tools

1. `explore` — search the allowlisted REST catalog. No data request.
2. `twexapi_request` — call an allowlisted relative path such as `/twitter/advanced_search/page`.

Writes are marked `read_only: false`. Require explicit approval before posting, following, liking, or sending DMs.

## Cursor

```json
{
  "mcpServers": {
    "twexapi": {
      "url": "https://api.twexapi.io/mcp",
      "headers": {
        "x-api-key": "YOUR_KEY"
      }
    }
  }
}
```

Do not paste live keys into chat. Full client examples: https://docs.twexapi.io/mcp/overview

## Claude Code

```bash
claude plugin marketplace add twexapi-dev/x-api-scraper
claude plugin install x-api-scraper@x-api-scraper
```

The plugin wires Skills and the hosted MCP server from this repository.
