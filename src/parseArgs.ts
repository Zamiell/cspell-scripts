import yargs from "yargs";
import { PROJECT_NAME } from "./constants";

export function parseArgs(): Record<string, unknown> {
  const yargsObject = yargs(process.argv.slice(2))
    .strict()
    .usage(`usage: ${PROJECT_NAME} <command> [options]`)
    .scriptName(PROJECT_NAME)

    .command(
      "check-orphan",
      "Check the .cspell.json file for orphaned words (default)",
      (builder) =>
        builder.option("verbose", {
          alias: "v",
          type: "boolean",
          description: "Enable verbose output",
        }),
    )

    .alias("h", "help") // By default, only "--help" is enabled
    .alias("v", "version"); // By default, only "--version" is enabled

  return yargsObject.argv as Record<string, unknown>;
}
