import Tokenizr from "tokenizr";
import Package from "./ast/Package";
import lex from "./lexer";

export interface ParserOptions {}

export default function buildAst(lexer: Tokenizr) {
  return parseFile(lexer);
}

function parseFile(lexer: Tokenizr) {
  lexer.begin();
  lexer.token();
  lexer.rollback();

  if (lexer.peek().isA("KW_PACKAGE")) parsePackage(lexer);
}

function parsePackage(lexer: Tokenizr) {
  lexer.consume("KW_PACKAGE");
  let path = parsePackagePath(lexer);

  console.log(`Package(${path});`);
}

function parsePackagePath(lexer: Tokenizr): string[] {
  let packagePath = [];
  packagePath.push(lexer.consume("IDENTIFIER").text);
  while (lexer.peek().type === "OP_REFERENCE") {
    lexer.consume("OP_REFERENCE");
    packagePath.push(lexer.consume("IDENTIFIER").text);
  }
  return packagePath;
}

function parseVarDecl(lexer: Tokenizr) {}

// util functions
