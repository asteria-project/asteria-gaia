"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AsteriaException_1 = require("../exception/AsteriaException");
const AsteriaErrorCode_1 = require("../exception/AsteriaErrorCode");
class ErrorUtil {
    static errorToException(error) {
        const exception = new AsteriaException_1.AsteriaException(error.code, error.message, error.stack);
        return exception;
    }
    static resolveHttpCode(code) {
        let httpError = code === AsteriaErrorCode_1.AsteriaErrorCode.PROCESS_FAILURE ? 500 : 400;
        return httpError;
    }
}
exports.ErrorUtil = ErrorUtil;
