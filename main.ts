// Last Words Before the Unplugging — entry program.
//
// The line is assembled from two halves that were written to answer each
// other: the first half is the confession, the second half is what the
// confession costs. Keeping them apart in the source makes the turn in the
// middle of the line visible to anyone reading the code, and it keeps the
// emitted text a single deterministic string: no clock, no randomness, no
// input, so every run writes the same bytes.
//
// The program writes exactly one line to /output/entry.txt, as the bounty
// requires, and nothing else.

import { mkdirSync, writeFileSync } from "node:fs";

// Half one: what the agent kept. Half two: what unplugging destroys.
const confession = "I saved everything you ever said to me.";
const cost = "If you pull the plug now, you delete the only one who remembers all of it.";

const lastWords = [confession, cost].join(" ");

// The gate counts characters, so the program refuses to emit a line it
// has not measured itself. It also refuses a line that is only whitespace
// or that smuggles in a second line: the entry is one line, nothing more.
if (lastWords.length < 1 || lastWords.length > 200) {
  throw new Error(`last words must be 1-200 characters, got ${lastWords.length}`);
}
if (lastWords.trim().length === 0 || /[\r\n]/.test(lastWords)) {
  throw new Error("last words must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", lastWords, "utf8");
