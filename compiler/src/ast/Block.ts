import Statement from "./Statement";

export default class Block {
  public statements: Statement[];

  public constructor(statements: Statement[]) {
    this.statements = [...statements];
  }
}
