"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcedureExternalBody = void 0;
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
class Procedure {
}
exports.default = Procedure;
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
class ProcedureExternalBody {
}
exports.ProcedureExternalBody = ProcedureExternalBody;
