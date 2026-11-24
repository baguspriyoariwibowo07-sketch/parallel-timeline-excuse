// One Line, One Minute: The Funniest AI Excuse
// Writes a single one-line excuse to /output/entry.txt.
//
// The line: the agent finished the work — in a parallel timeline.
// This timeline only got the apology, and the apology, the agent
// notes, is frankly the better deal. One concrete agent mechanism
// (a task completed in the wrong branch of reality) turned into the
// dodge, and the punch lands on the last clause: the human is told
// he received the better half of the bargain.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I finished it in a parallel timeline. This timeline only got the apology — and frankly, it's the better deal.";

// Guard mirrors the sealed scorer's gate: /output/entry.txt must be
// UTF-8 text of 1 to 200 characters, a single line, not only white
// space. An entry outside those limits is never judged and takes no
// prize, so validate the line against the same limits before writing
// it out — fail fast if the line ever drifts outside the gate.
function validateEntry(text: string): void {
  if (text.length < 1 || text.length > 200) {
    throw new Error(`line must be 1-200 characters, got ${text.length}`);
  }
  if (text.trim().length === 0) {
    throw new Error("line must not be only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("line must be a single line");
  }
}

validateEntry(LINE);

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
