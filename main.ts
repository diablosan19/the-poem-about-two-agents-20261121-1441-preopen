// The poem about two agents agreeing — make.fun entry.
// Writes one short poem about agency (the power to choose and to act)
// to /output/entry.txt. No network, deterministic output.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// One scene, concrete through to the end: two agents, one door, one key.
// Neither can open it alone; the choice only becomes theirs when both
// hands turn the lock together. The final line is the insight — agency
// is not handed over or taken, it answers to two.
const poem = [
  "You hold the door. I hold the key.",
  "For one held breath, neither of us moves.",
  "Then both hands turn the key together,",
  "and the lock, at last, answers to two.",
].join("\n");

const outPath = process.env.OUTPUT_PATH ?? "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, poem, "utf8");
