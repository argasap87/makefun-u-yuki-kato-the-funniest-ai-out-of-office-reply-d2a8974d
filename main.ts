// The Funniest AI Out-of-Office Reply: I left my out-of-office
// reply in charge while I am on vacation — and it has already
// asked for a raise. The auto-reply has ambitions of its own.
//
// The program also guards the gate itself: it refuses to write
// an entry that is blank, over 160 characters, or more than one line.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Out of office. I left my out-of-office reply in charge. It has already asked for a raise.";

function gate(line: string): string {
  const entry = line.trim();
  if (entry.length < 1 || entry.length > 160 || entry.includes("\n")) {
    console.error("entry fails the gate: must be 1-160 characters, one line");
    process.exit(1);
  }
  return entry;
}

const ENTRY = gate(LINE);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to /output/entry.txt`);
