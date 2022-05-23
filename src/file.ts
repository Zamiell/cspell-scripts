import fs from "fs";
import { error } from "./utils";

export function read(filePath: string, verbose: boolean): string {
  if (verbose) {
    console.log(`Reading a file: ${filePath}`);
  }

  let fileContents: string;
  try {
    fileContents = fs.readFileSync(filePath, "utf8");
  } catch (err) {
    error(`Failed to read the "${filePath}" file:`, err);
  }

  if (verbose) {
    console.log(`Read a file: ${filePath}`);
  }

  return fileContents;
}
