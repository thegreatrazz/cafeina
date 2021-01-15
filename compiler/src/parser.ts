import Tokenizr from "tokenizr";
import Package from "./ast/Package";

export interface ParserOptions {}

export default function parser(lexer: Tokenizr) {
  let package = new Package();
}
