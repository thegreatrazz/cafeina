import * as fs from "fs/promises";

export default interface SourceInput {
  getSource: () => string | Promise<string>;
}

export function stringInput(string: string): SourceInput {
  return {
    getSource: () => string,
  };
}

export async function fileInput(filename: string): Promise<SourceInput> {
  // check if the file is one we can open
  let fd = await fs.open(filename, "r");
  fd.close();

  // return an object that will provide the source code
  return {
    getSource: async () =>
      await fs.readFile(filename, {
        encoding: "utf-8",
      }),
  };
}
