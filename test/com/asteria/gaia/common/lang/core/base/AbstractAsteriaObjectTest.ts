import 'mocha';
import { expect } from 'chai';

// Class to test:
import { AsteriaObject } from '../../../../../../../../src/com/asteria/gaia/common/lang/core/AsteriaObject';

// Utilities:
import { AsteriaObjectImpl } from '../../../../../../../../utils/test-utils/classes/AsteriaObjectImpl';

// Test:
describe('@AbstractAsteriaObject class test', () => {

    describe('#getClassName()', () => {

        it('should return the smae class name as passed to the constructor function', () => {
            const CLASS_NAME: string = 'utils.test-utils.classes::AsteriaObjectImpl';
            const instance: AsteriaObject = new AsteriaObjectImpl(CLASS_NAME);
            expect(instance.getClassName()).to.equal(CLASS_NAME);
        });
    });
});