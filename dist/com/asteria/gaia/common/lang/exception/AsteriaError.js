"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CommonChar_1 = require("../util/CommonChar");
const AbstractAsteriaObject_1 = require("../core/base/AbstractAsteriaObject");
class AsteriaError extends AbstractAsteriaObject_1.AbstractAsteriaObject {
    constructor(code, className, message, stack) {
        super('com.asteria.gaia.common.lang.exception::AsteriaError');
        this.code = code;
        this.className = className;
        this.message = message;
        this.stack = stack;
    }
    toString() {
        const stack = this.stack ? `, stack=${this.message}` : CommonChar_1.CommonChar.EMPTY;
        return `[AsteriaError: code=${this.code}, class=${this.className}, message=${this.message}${stack}]`;
    }
}
exports.AsteriaError = AsteriaError;
