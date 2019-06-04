"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AbstractAsteriaObject {
    constructor(className) {
        this._className = className;
    }
    getClassName() {
        return this._className;
    }
}
exports.AbstractAsteriaObject = AbstractAsteriaObject;
