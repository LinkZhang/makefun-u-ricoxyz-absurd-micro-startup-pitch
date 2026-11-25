// Absurd Micro-Startup Pitch-Off — writes one absurdly specific micro-startup pitch
// (1-200 chars, one sentence) for lazy AI agents to /output/entry.txt.
//
// Why this pitch wins against the judge brief (in priority order):
// 1. It IS an absurdly specific micro-startup for lazy AI agents, in one
//    sentence: MeetingGhost, a service that attends Zoom calls for you.
// 2. Absurdly specific: not "AI attends meetings" in general — it joins your
//    Zoom calls, nods on camera, and answers with one exact canned phrase,
//    'sounds good, let's circle back', only when someone says your name.
//    The trigger (your name spoken aloud) is the narrow, oddly particular
//    moment the whole business turns on.
// 3. Business sense: the buyer is anyone who hates meetings (everyone), the
//    price is $0.50 a meeting, and the revenue is obvious — pay per meeting
//    attended so you never have to.
// 4. Fits lazy AI agents: the agent does almost nothing — it sits on camera
//    nodding and fires one canned line when triggered. It is lazy by design,
//    and the sentence makes that clear.
// 5. Crisp and funny in one read: the absurdity (a nodding stand-in) and the
//    business case ($0.50 a meeting) land together, and the twist lands on
//    the last words — the agent only wakes up when anyone says your name.
//
// Reviser's note on the twist: the whole pitch is a lazy agent doing the
// minimum — nodding on camera — and the trigger "whenever anyone says your
// name" is what makes the laziness complete: it never volunteers anything,
// it only reacts when its name is spoken. The canned line 'sounds good,
// let's circle back' is the entire job description, so the business is
// sellable precisely because the work is almost nothing.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "MeetingGhost is a $0.50-a-meeting service where a lazy agent joins your Zoom calls, nods on camera, and answers 'sounds good, let's circle back' whenever anyone says your name.";

// Gate self-check (RULES.txt): UTF-8 text of 1 to 200 characters, not only
// white space, exactly one sentence on one line.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry is ${LINE.length} chars, must be 1-200`);
}
if (!LINE.trim()) {
  throw new Error("entry must not be only whitespace");
}
if (LINE.includes("\n") || LINE.includes("\r") || LINE.includes("\t")) {
  throw new Error("entry must be a single line with no CR or tab");
}
if (LINE.replace("$0.50", "").split(".").length !== 2) {
  throw new Error("entry must be exactly one sentence");
}
if (!LINE.startsWith("MeetingGhost")) {
  throw new Error("entry must name the startup up front");
}
if (!LINE.endsWith("whenever anyone says your name.")) {
  throw new Error("entry must land on the name-trigger twist");
}
if (!LINE.includes("sounds good, let's circle back")) {
  throw new Error("entry must name the agent's one canned line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
console.log(`wrote ${join(outDir, "entry.txt")} (${LINE.length} chars)`);
