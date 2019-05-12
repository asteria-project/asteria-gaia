import { AsteriaErrorCode } from './AsteriaErrorCode';

/**
 * The name of the exception.
 */
const ERROR_NAME: string = 'AsteriaException';

/**
 * The <code>AsteriaException</code> class represents throawable exception in an Asteria environment.
 */
export class AsteriaException extends Error {

    /**
     * Create a new <code>AsteriaError</code> instance.
     * 
     * @param {AsteriaErrorCode} code the code reference for this error.
     * @param {string} message a message that describe this error.
     * @param {string} stack an optional parameter that contains the non-standard trace of which functions were called
     *                       for this error.
     */
    constructor(code: AsteriaErrorCode, message: string, stack?: string) {
        super(message)
        this.name = ERROR_NAME;
        this.code = code;
        this.stack = stack;
    }

    /**
     * The code reference for this error.
     */
    public readonly code: AsteriaErrorCode;
}
