import { defineMcp } from "@lovable.dev/mcp-js";
import getChallengeOverview from "./tools/get-challenge-overview";
import listTracks from "./tools/list-tracks";
import getTimeline from "./tools/get-timeline";
import searchFaq from "./tools/search-faq";

export default defineMcp({
  name: "cyborg-landing-page",
  title: "Cyborg Landing Page",
  version: "0.1.0",
  instructions:
    "Public information about the UNIT-07 // Cybernetic Challenge at Techfest 2026, IIT Bombay. Use `get_challenge_overview` for the summary, `list_tracks` for the six competition tracks, `get_timeline` for key dates, and `search_faq` for participant questions.",
  tools: [getChallengeOverview, listTracks, getTimeline, searchFaq],
});
