import { defineTool } from "@lovable.dev/mcp-js";
import { TRACKS } from "../data";

export default defineTool({
  name: "list_tracks",
  title: "List competition tracks",
  description: "List the six UNIT-07 competition tracks with their codes and descriptions.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text" as const, text: JSON.stringify(TRACKS, null, 2) }],
    structuredContent: { tracks: TRACKS },
  }),
});
