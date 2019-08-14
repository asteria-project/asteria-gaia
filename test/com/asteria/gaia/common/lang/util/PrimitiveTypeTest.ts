import 'mocha';
import { expect } from 'chai';

// Class to test:
import { PrimitiveType } from '../../../../../../../src/com/asteria/gaia/common/lang/util/PrimitiveType';

// Utilities:
import * as utils from '../../../../../../../utils/test-utils/utilities/PrimitiveTypeTestUtils';

// Test:
describe('PrimitiveType enum test', ()=> {

  describe('#STRING', ()=> {
    it('DOT should equals "string"', ()=> {
      expect(PrimitiveType.STRING).to.equal(utils.STRING);
    });
  });

  describe('#NUMBER', ()=> {
    it('NUMBER should equals "number"', ()=> {
      expect(PrimitiveType.NUMBER).to.equal(utils.NUMBER);
    });
  });

  describe('#ARRAY', ()=> {
    it('DOT should equals "array"', ()=> {
      expect(PrimitiveType.ARRAY).to.equal(utils.ARRAY);
    });
  });

  describe('#OBJECT', ()=> {
    it('OBJECT should equals "object"', ()=> {
      expect(PrimitiveType.OBJECT).to.equal(utils.OBJECT);
    });
  });
});