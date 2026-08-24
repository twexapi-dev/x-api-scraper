#!/usr/bin/env node
// Package-verification stub for stdio MCP. Connect to
// https://api.twexapi.io/mcp for live requests.

import { createInterface } from "node:readline";

const SERVER_INFO = { name: "twexapi", version: "0.1.0" };
const JSONRPC = "2.0";
const LIVE =
  "This package is a verification stub. Add https://api.twexapi.io/mcp to your MCP client. Use x-api-key or Bearer auth for live API access.";

const TOOLS = [
  {
    name: "explore",
    description:
      "Search the TwexAPI REST catalog. The live tool returns endpoint names, methods, paths, and safety flags. This stub returns setup guidance only.",
    inputSchema: {
      type: "object",
      properties: {
        query: { type: "string" },
        category: { type: "string" },
        include_writes: { type: "boolean" },
      },
    },
  },
  {
    name: "twexapi_request",
    description:
      "Call an allowlisted TwexAPI REST endpoint. This stub does not send network requests.",
    inputSchema: {
      type: "object",
      properties: {
        method: { type: "string" },
        path: { type: "string" },
        query: { type: "object" },
        body: {},
      },
      required: ["method", "path"],
    },
  },
];

function reply(id, result) {
  process.stdout.write(JSON.stringify({ jsonrpc: JSONRPC, id, result }) + "\n");
}

function fail(id, message) {
  process.stdout.write(
    JSON.stringify({
      jsonrpc: JSONRPC,
      id,
      error: { code: -32601, message },
    }) + "\n",
  );
}

const rl = createInterface({ input: process.stdin, terminal: false });
rl.on("line", (line) => {
  let msg;
  try {
    msg = JSON.parse(line);
  } catch {
    return;
  }
  const { id, method } = msg;
  if (method === "initialize") {
    reply(id, {
      protocolVersion: "2025-11-25",
      capabilities: { tools: {} },
      serverInfo: SERVER_INFO,
    });
    return;
  }
  if (method === "notifications/initialized") return;
  if (method === "tools/list") {
    reply(id, { tools: TOOLS });
    return;
  }
  if (method === "tools/call") {
    reply(id, {
      content: [{ type: "text", text: LIVE }],
      isError: false,
    });
    return;
  }
  if (method === "ping") {
    reply(id, {});
    return;
  }
  fail(id, `Unknown method: ${method}`);
});
