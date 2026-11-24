import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The Funniest Sick-Day Excuse — one line, under 200 chars.
// Revision: "My dentist" + "I'm taking the day off" — first person,
// like a real person texting their boss, not a contest joke.
// The punchline lands on the last three words: Starting with work.
const line =
  "My dentist says I have to stop grinding my teeth, so I'm taking the day off from everything that makes me clench my jaw. Starting with work.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
console.log(`wrote ${line.length} chars to ${join(outDir, "entry.txt")}`);
