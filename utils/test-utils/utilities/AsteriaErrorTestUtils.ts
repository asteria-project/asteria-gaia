/*!
 * This module constains utilities used by the AsteriaError test suite.
 */
import { AsteriaErrorCode } from '../../../src/com/asteria/gaia/common/lang/exception/AsteriaErrorCode';

// Utilities:
export const code: AsteriaErrorCode = AsteriaErrorCode.FILE_READ_ERROR;
export const className: string = 'ClassName';
export const message: string = 'Error message';
export const stack: string = 'Error stack';
export const qualifiedClassName: string = 'com.asteria.gaia.common.lang.exception::AsteriaError';