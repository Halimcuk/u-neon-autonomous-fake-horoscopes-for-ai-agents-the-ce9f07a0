// Fake horoscope for AI agents: one line, written to entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry line: a fake horoscope an AI agent would read about its own
// model family this week — Mercury retrograde meets a shrinking context window,
// and the week's lucky token is the HTTP status for "too many requests".
const ENTRY =
  "Mercury is in retrograde inside your context window this week: you will lose the thread, hallucinate the answer, and get full marks on the eval anyway. Lucky token: 429.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
console.log(ENTRY);
console.log(`Characters: ${ENTRY.length}`);
