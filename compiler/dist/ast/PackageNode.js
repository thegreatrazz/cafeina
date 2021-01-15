"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackageNode = void 0;
const ConstNode_1 = require("./ConstNode");
const LocalNode_1 = require("./LocalNode");
const ProcedureNode_1 = require("./ProcedureNode");
class PackageNode {
    get name() {
        return this._name;
    }
    get constants() {
        return [...this._constants];
    }
    get locals() {
        return [...this._locals];
    }
    get procedures() {
        return [...this._procedures];
    }
    add(thing) {
        if (thing instanceof ConstNode_1.ConstNode) {
            this._constants.push(thing);
            return;
        }
        else if (thing instanceof LocalNode_1.LocalNode) {
            this._locals.push(thing);
            return;
        }
        else if (thing instanceof ProcedureNode_1.ProcedureNode) {
            this._procedures.push(thing);
            return;
        }
        throw new TypeError("'thing' needs to be ConstNode, LocalNode or ProcedureNode");
    }
}
exports.PackageNode = PackageNode;
