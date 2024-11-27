import { readFileSync } from "node:fs";
import path from "node:path";

export function readPublicDataSync(dataPath: string) {
  return readFileSync(
    path.resolve(process.cwd(), `public/data/`, dataPath),
    "utf-8",
  );
}
