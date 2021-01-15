"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockScope = void 0;
class ExecutionContext {
    constructor() {
        this.blockStack = [];
    }
    getVariable(name) {
        let stackFrameNo = 0;
        while (stackFrameNo < this.blockStack.length) {
            const stackFrame = this.blockStack[this.blockStack.length - 1 - stackFrameNo];
            const value = stackFrame.getVariable(name);
            // if variable is unset, look again in scope above
            if (typeof value === "undefined") {
                stackFrameNo++;
                continue;
            }
            // return the value if not undefined
            return value;
        }
        // if there is no value, return undefined
        return void 0;
    }
    setVariable(name, value) {
        let stackFrameNo = 0;
        while (stackFrameNo < this.blockStack.length) {
            const stackFrame = this.blockStack[this.blockStack.length - 1 - stackFrameNo];
            const hasValue = stackFrame.hasVariable(name);
            if (hasValue) {
                return stackFrame.setVariable(name, value);
            }
            stackFrameNo++;
        }
    }
    pushBlock(block, varDecl) {
        this.blockStack.push(new BlockScope(block, varDecl));
    }
    popBlock() {
        this.blockStack.pop();
    }
    toString() {
        let sb = "";
        sb += "Stack frame:\n\n";
        for (const block of this.blockStack) {
            sb += `Block: ${block.block}\n`;
            sb += `Variables:\n`;
            const vars = block.getAllVariables();
            for (const varKey of Object.keys(vars)) {
                const varValue = vars[varKey];
                sb += `\t${varKey} -> ${varValue}\n`;
            }
            sb += "\n";
        }
        sb += "\n";
        return sb;
    }
}
exports.default = ExecutionContext;
class BlockScope {
    constructor(_block, varDecls) {
        this._block = _block;
        for (const varDecl of varDecls) {
            this.variables[varDecl] = null;
        }
    }
    get block() {
        return this._block;
    }
    getAllVariables() {
        return { ...this.variables };
    }
    getVariable(name) {
        return this.variables[name];
    }
    hasVariable(name) {
        return typeof this.getVariable(name) !== "undefined";
    }
    setVariable(name, value) {
        this.variables[name] = value;
    }
}
exports.BlockScope = BlockScope;
