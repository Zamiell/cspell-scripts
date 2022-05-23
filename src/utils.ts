export function error(...args: unknown[]): never {
  console.error(...args);
  process.exit(1);
}

export function parseJSON(s: string): unknown {
  let parsedJSON: unknown;

  try {
    parsedJSON = JSON.parse(s);
  } catch (err) {
    error("Failed to parse the JSON:", err);
  }

  return parsedJSON;
}
