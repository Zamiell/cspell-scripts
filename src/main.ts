import path from "path";
import sourceMapSupport from "source-map-support";
import { CSPELL_JSON, CWD } from "./constants";
import * as file from "./file";
import { parseArgs } from "./parseArgs";
import { error, parseJSON } from "./utils";

main();

function main() {
  sourceMapSupport.install();

  // Get command line arguments
  const argv = parseArgs();
  const verbose = argv.verbose === true;

  const dictionaryPath = path.join(CWD, CSPELL_JSON);
  const dictionaryString = file.read(dictionaryPath, verbose);
  const dictionary = parseJSON(dictionaryString) as Record<string, unknown>;

  if (dictionary.words === undefined) {
    error(`The "${dictionaryPath}" file does not have a "words" property.`);
  }

  if (!Array.isArray(dictionary.words)) {
    error(
      `The "${dictionaryPath}" file does not have an array for the "words" property.`,
    );
  }

  for (const word of dictionary.words) {
    if (typeof word !== "string") {
      error(
        `The "${dictionaryPath}" file has a word that is not a string: ${word}`,
      );
    }

    checkWordInUse(word);
  }
}

function checkWordInUse(word: string) {}
