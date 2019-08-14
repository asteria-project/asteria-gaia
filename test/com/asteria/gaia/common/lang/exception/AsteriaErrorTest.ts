import 'mocha';
import { expect } from 'chai';

// Class to test:
import { AsteriaError } from '../../../../../../../src/com/asteria/gaia/common/lang/exception/AsteriaError';

// Utilities:
import * as utils from '../../../../../../../utils/test-utils/utilities/AsteriaErrorTestUtils';

// Test:
describe('AsteriaError class test', () => {

    it('#getClassName() should return the AsteriaError qualified class name', () => {
        const instance: AsteriaError = new AsteriaError(utils.code, utils.className, utils.message, utils.stack);
        expect(instance.getClassName()).to.equal(utils.qualifiedClassName);
    });
    
    it('#code should return the same value as passed to constructor', () => {
        const instance: AsteriaError = new AsteriaError(utils.code, utils.className, utils.message, utils.stack);
        expect(instance.code).to.equal(utils.code);
    });
    
    it('#className should return the same value as passed to constructor', () => {
        const instance: AsteriaError = new AsteriaError(utils.code, utils.className, utils.message, utils.stack);
        expect(instance.className).to.equal(utils.className);
    });
    
    it('#message should return the same value as passed to constructor', () => {
        const instance: AsteriaError = new AsteriaError(utils.code, utils.className, utils.message, utils.stack);
        expect(instance.message).to.equal(utils.message);
    });
    
    it('#stack should return the same value as passed to constructor', () => {
        const instance: AsteriaError = new AsteriaError(utils.code, utils.className, utils.message, utils.stack);
        expect(instance.stack).to.equal(utils.stack);
    });
    
    it('#stack should return undefined whether no parameter is passed to constructor', () => {
        const instance: AsteriaError = new AsteriaError(utils.code, utils.className, utils.message);
        expect(instance.stack).to.equal(undefined);
    });
});