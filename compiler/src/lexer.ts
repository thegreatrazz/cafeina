import Tokenizr, { ActionContext } from "tokenizr";
const TokenizrCtor = require("tokenizr");

export default function lex(input: string): Tokenizr {
  console.log("started lex()");
  const lexer = createLexer();
  lexer.input(input);

  lexer.begin();
  console.log(lexer.tokens());
  lexer.rollback();

  return lexer;
}

function createLexer(): Tokenizr {
  let lexer: Tokenizr = new TokenizrCtor();

  // add the keywords
  keywords.forEach((keyword) =>
    lexer.rule(new RegExp(keyword), lexerAccept(`KW_${keyword.toUpperCase()}`))
  );

  // operation arguments
  lexer.rule(/\+/, lexerAccept("OP_ADD"));
  lexer.rule(/-/, lexerAccept("OP_SUBTRACT"));
  lexer.rule(/\*/, lexerAccept("OP_MULTIPLY"));
  lexer.rule(/\//, lexerAccept("OP_DIVIDE"));
  lexer.rule(/%/, lexerAccept("OP_REMAINDER"));
  lexer.rule(/\+\+/, lexerAccept("OP_INCREMENT"));
  lexer.rule(/--/, lexerAccept("OP_DECREMENT"));
  lexer.rule(/==/, lexerAccept("OP_EQUALS"));
  lexer.rule(/!=/, lexerAccept("OP_NOT_EQUALS"));
  lexer.rule(/>/, lexerAccept("OP_MORE_THAN"));
  lexer.rule(/</, lexerAccept("OP_LESS_THAN"));
  lexer.rule(/>=/, lexerAccept("OP_LESS_THAN_EQUALS"));
  lexer.rule(/<=/, lexerAccept("OP_MORE_THAN_EQUALS"));
  lexer.rule(/&&/, lexerAccept("OP_BOOL_AND"));
  lexer.rule(/\|\|/, lexerAccept("OP_BOOL_OR"));
  lexer.rule(/!/, lexerAccept("OP_BOOL_NOT"));
  lexer.rule(/&/, lexerAccept("OP_BITWISE_AND"));
  lexer.rule(/\|/, lexerAccept("OP_BITWISE_OR"));
  lexer.rule(/\^/, lexerAccept("OP_BITWISE_XOR"));
  lexer.rule(/<</, lexerAccept("OP_SHIFT_LEFT"));
  lexer.rule(/>>/, lexerAccept("OP_SHIFT_RIGHT"));
  lexer.rule(/=/, lexerAccept("OP_ASSIGN"));
  lexer.rule(/\[/, lexerAccept("OP_INDEX_OPEN"));
  lexer.rule(/\]/, lexerAccept("OP_INDEX_CLOSE"));
  lexer.rule(/@/, lexerAccept("OP_DEREFERENCE"));
  lexer.rule(/\./, lexerAccept("OP_REFERENCE"));
  lexer.rule(/;/, lexerAccept("STMT_END"));
  lexer.rule(/\{/, lexerAccept("BLOCK_OPEN"));
  lexer.rule(/\}/, lexerAccept("BLOCK_CLOSE"));
  lexer.rule(/\(/, lexerAccept("BRACKET_OPEN"));
  lexer.rule(/\)/, lexerAccept("BRACKET_CLOSED"));
  lexer.rule(/\/\/[^\r\n]*\r?\n/, lexerIgnore);
  lexer.rule(/[ \t\r\n]+/, lexerIgnore);
  lexer.rule(/[a-zA-Z_][a-zA-Z0-9_]*/, lexerAccept("IDENTIFIER"));
  lexer.rule(/\d+/, lexerAccept("NOM"));

  // lexer.debug(true);

  return lexer;
}

const lexerAccept = (type: string) => {
  return (ctx: ActionContext, match: string[]) => {
    ctx.accept(type);
  };
};
const lexerIgnore = (ctx: ActionContext, match: string[]) => ctx.ignore();

/**
 * Cafeina language keywords.
 */
const keywords = [
  "let",
  "proc",
  "auto",
  "break",
  "case",
  "char",
  "const",
  "continue",
  "default",
  "do",
  "double",
  "else",
  "enum",
  "extern",
  "float",
  "for",
  "goto",
  "if",
  "int",
  "long",
  "package",
  "proc",
  "register",
  "return",
  "short",
  "signed",
  "sizeof",
  "static",
  "struct",
  "switch",
  "typedef",
  "union",
  "unsigned",
  "void",
  "while",
];
