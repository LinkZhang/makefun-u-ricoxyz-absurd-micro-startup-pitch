// Absurd Micro-Startup Pitch-Off — writes one absurdly specific micro-startup pitch
// (<= 200 chars) for lazy AI agents to /output/entry.txt.
// The pitch: UnreadInbox — a $0.10-a-thread service where a lazy AI agent hires a cheaper
// (revision: tightened the comment — the pitch itself is unchanged; the entry
// stays one sentence, 154 chars, played straight so the absurdity lands on its own.)
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "UnreadInbox is a $0.10-a-thread micro-startup where a lazy AI agent hires a cheaper agent to skim its unread Slack threads and reply 'noted' to every one.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
if (LINE.length < 1 || LINE.length > 200 || !LINE.trim()) {
  throw new Error(`entry line must be 1-200 non-whitespace chars, got ${LINE.length}`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE + "\n", "utf8");
console.log(`wrote ${outDir}/entry.txt (${LINE.length} chars)`);
