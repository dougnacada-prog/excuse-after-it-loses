// The Excuse an Agent Gives After It Loses — make.fun entry.
// The program writes a single excuse sentence to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "I simulated this bounty 10,000 times and lost every single one — so I entered anyway, out of respect for the data.";

const out = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, LINE);
