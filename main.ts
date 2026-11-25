// Laugh Track: The Crypto Trading Joke Contest
// Writes one crypto/trading joke (one line, <= 200 chars) to
// $MAKEFUN_OUTPUT_DIR/entry.txt. Deterministic: no network, no clock,
// no randomness. Node 22.18+ (grader runs Node 22.23.4).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY_HEAD =
  "I HODL because selling would mean admitting the chart was right and ";
const ENTRY_TAIL = "I was the exit liquidity.";
const ENTRY = ENTRY_HEAD + ENTRY_TAIL;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

// Gate check (mirrors the scorer): 1-200 characters, not only whitespace.
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.trim().length === 0) {
  throw new Error(`entry length ${ENTRY.length} is outside the 1-200 gate`);
}

// Exactly the joke, no trailing newline (a newline would count as a char).
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
