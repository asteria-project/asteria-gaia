"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ERROR_NAME = 'AsteriaException';
class AsteriaException extends Error {
    constructor(code, message, stack) {
        super(message);
        this.name = ERROR_NAME;
        this.code = code;
        this.stack = stack;
    }
    toString() {
        return `AsteriaException: code=${this.code}, name=${this.name}, stack=${this.stack}`;
    }
}
exports.AsteriaException = AsteriaException;
