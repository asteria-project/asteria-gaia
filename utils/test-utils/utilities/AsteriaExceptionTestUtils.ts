/*!
 * This module constains utilities used by the AsteriaException test suite.
 */
import { AsteriaErrorCode } from '../../../src/com/asteria/gaia/common/lang/exception/AsteriaErrorCode';

// Utilities:
export const code: AsteriaErrorCode = AsteriaErrorCode.FILE_READ_ERROR;
export const message: string = 'Error message';
export const stack: string = 'Error stack';
export const ERROR_NAME: string = 'AsteriaException';