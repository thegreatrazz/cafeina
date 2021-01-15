import Block from "./Block";
import Package from "./Package";
import Type from "./Type";

/**
 * A procedure (in C, called function) is a callable value which executes
 * a block of code.
 *
 * ```
 * proc int_to_string(a: int, b: radix): string
 * {
 *   // ...
 * }
 * ```
 */
export default class Procedure {
  /**
   * The package this procedure belongs to.
   */
  public package: Package;

  /**
   * The name of the procedure.
   */
  public name: string;

  /**
   * The input parameters for the procedure.
   */
  public param: { [name: string]: Type };

  /**
   * Whether the procedure accepts variable parameters.
   */
  public varParam: boolean;

  /**
   * The type of the return value, if known.
   */
  public returnType?: Type;

  /**
   * The procedure body.
   */
  public procedureBody: Block | ProcedureExternalBody;
}

/**
 * Foreign function call. Similar to a procedure like so:
 *
 * ```
 * proc extern(symbol_name: string, ffi_method: string): procref
 * ```
 *
 * ```
 * proc is_printable(ch: int): int extern("isprint", "C");
 * ```
 */
export class ProcedureExternalBody {
  public symbolName: string;
  public ffiMethod: string;
}
