import { AsteriaException } from '../exception/AsteriaException';
import { AsteriaError } from '../exception/AsteriaError';
import { AsteriaErrorCode } from '../exception/AsteriaErrorCode';

/**
 * A convenient class for working errors in Asteria environments.
 */
export class ErrorUtil {

    /**
     * Turn the specified Asteria error into an Asteria exception.
     * 
     * @param {AsteriaError} error the Asteria error to convet.
     * 
     * @returns {AsteriaException} a new Asteria exception built from the specified Asteria error.
     */
    public static errorToException(error: AsteriaError): AsteriaException {
        const exception: AsteriaException = new AsteriaException(error.code, error.message, error.stack);
        return exception;
    }

    /**
     * Return the HTTP code that correspons to the specified Asteria error code.
     * 
     * @param {AsteriaErrorCode} code the Asteria error code to convet.
     * 
     * @returns {number} a valid HTTP error code.
     */
    public static resolveHttpCode(code: AsteriaErrorCode): number {
        let httpError: number = code === AsteriaErrorCode.PROCESS_FAILURE ? 500 : 400;
        return httpError;
    }
}