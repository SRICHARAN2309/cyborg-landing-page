import { defineTool } from "@lovable.dev/mcp-js";
import { PHASES } from "../data";

export default defineTool({
  name: "get_timeline",
  title: "Get challenge timeline",
  description: "Get the UNIT-07 mission phases: registration, submission deadline, finals, and awards dates.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text" as const, text: JSON.stringify(PHASES, null, 2) }],
    structuredContent: { phases: PHASES },
  }),
});
