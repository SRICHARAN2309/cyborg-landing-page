import { defineTool } from "@lovable.dev/mcp-js";
import { CHALLENGE } from "../data";

export default defineTool({
  name: "get_challenge_overview",
  title: "Get challenge overview",
  description:
    "Get the overview of the UNIT-07 Cybernetic Challenge at Techfest 2026, IIT Bombay: summary, prize pool, fee, and contact.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text" as const, text: JSON.stringify(CHALLENGE, null, 2) }],
    structuredContent: { challenge: CHALLENGE },
  }),
});
