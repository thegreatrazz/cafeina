import Package from "./ast/Package";
import SourceInput from "./compiler/SourceInput";
import { EventEmitter } from "events";
import lex from "./lexer";
import buildAst from "./parser";

export default class Compiler {
  public sources: SourceInput[] = [];
  private _events = new EventEmitter();

  public constructor() {}

  public addSources(...sources: SourceInput[]) {
    this.sources = [...this.sources, ...sources];
  }

  public async compile() {
    console.log("started compile");

    // for each source
    for (const source of this.sources) {
      let sourceString = await resolveSource(source);

      // tokenise and parse the string
      let lexer = lex(sourceString);
      let ast = buildAst(lexer);
    }
  }
}

async function resolveSource(source: SourceInput): Promise<string> {
  let ret = source.getSource();
  if (typeof ret === "string") return ret;
  return await ret;
}
