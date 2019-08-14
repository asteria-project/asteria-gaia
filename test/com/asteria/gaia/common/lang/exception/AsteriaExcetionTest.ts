import 'mocha';
import { expect } from 'chai';

// Class to test:
import { AsteriaException } from '../../../../../../../src/com/asteria/gaia/common/lang/exception/AsteriaException';

// Utilities:
import * as utils from '../../../../../../../utils/test-utils/utilities/AsteriaExceptionTestUtils';

// Test:
describe('AsteriaException class test', () => {

    it('#name should return AsteriaException', () => {
        const instance: AsteriaException = new AsteriaException(utils.code, utils.message, utils.stack);
        expect(instance.name).to.equal(utils.ERROR_NAME);
    });

    it('#code should return the same value as passed to constructor', () => {
        const instance: AsteriaException = new AsteriaException(utils.code, utils.message, utils.stack);
        expect(instance.code).to.equal(utils.code);
    });
    
    it('#message should return the same value as passed to constructor', () => {
        const instance: AsteriaException = new AsteriaException(utils.code, utils.message, utils.stack);
        expect(instance.message).to.equal(utils.message);
    });
    
    it('#stack should return the same value as passed to constructor', () => {
        const instance: AsteriaException = new AsteriaException(utils.code, utils.message, utils.stack);
        expect(instance.stack).to.equal(utils.stack);
    });
    
    it('#stack should return undefined whether no parameter is passed to constructor', () => {
        const instance: AsteriaException = new AsteriaException(utils.code, utils.message);
        expect(instance.stack).to.equal(undefined);
    });
});