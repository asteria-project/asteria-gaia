import 'mocha';
import { expect } from 'chai';

// Class to test:
import { AsteriaException } from '../../../../../../../src/com/asteria/gaia/common/lang/exception/AsteriaException';
import { AsteriaError } from '../../../../../../../src/com/asteria/gaia/common/lang/exception/AsteriaError';
import { ErrorUtil } from '../../../../../../../src/com/asteria/gaia/common/lang/util/ErrorUtil';

// Utilities:
import * as utils from '../../../../../../../utils/test-utils/utilities/AsteriaExceptionTestUtils';

const className: string = 'com.asteria.gaia.common.lang.util.ErrorUtilTest';

// Test:
describe('ErrorUtil class test', () => {

    describe('#errorToException()', () => {

        it('should create a new AsteriaException instance with the same code as the original error', () => {
            const error: AsteriaError = new AsteriaError(utils.code, className, utils.message, utils.stack);
            const exception: AsteriaException = ErrorUtil.errorToException(error);
            expect(exception.code).to.equal(error.code);
        });
        
        it('should create a new AsteriaException instance with the same message as the original error', () => {
            const error: AsteriaError = new AsteriaError(utils.code, className, utils.message, utils.stack);
            const exception: AsteriaException = ErrorUtil.errorToException(error);
            expect(exception.message).to.equal(error.message);
        });
        
        it('should create a new AsteriaException instance with the same stack as the original error', () => {
            const error: AsteriaError = new AsteriaError(utils.code, className, utils.message, utils.stack);
            const exception: AsteriaException = ErrorUtil.errorToException(error);
            expect(exception.stack).to.equal(error.stack);
        });
        
        it('should create a new AsteriaException instance with stack equals to undefined', () => {
            const error: AsteriaError = new AsteriaError(utils.code, className, utils.message);
            const exception: AsteriaException = ErrorUtil.errorToException(error);
            expect(exception.stack).to.equal(undefined);
        });
    });

    describe('#resolveHttpCode(): @deprecated feature', () => {});
});