import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { FAQS } from "../data";

export default defineTool({
  name: "search_faq",
  title: "Search FAQ",
  description:
    "Search the UNIT-07 challenge FAQ (eligibility, hardware, submission format, prizes, fees, contact). Omit the query to get every entry.",
  inputSchema: {
    query: z.string().trim().optional().describe("Keywords to match against questions and answers."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ query }) => {
    const q = query?.toLowerCase();
    const results = q
      ? FAQS.filter((f) => `${f.question} ${f.answer}`.toLowerCase().includes(q))
      : FAQS;
    return {
      content: [{ type: "text" as const, text: JSON.stringify(results, null, 2) }],
      structuredContent: { results },
    };
  },
});
