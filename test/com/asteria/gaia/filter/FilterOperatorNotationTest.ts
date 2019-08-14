import 'mocha';
import { expect } from 'chai';

// Class to test:
import { FilterOperatorNotation } from '../../../../../src/com/asteria/gaia/filter/FilterOperatorNotation';

// Utilities:
import * as utils from '../../../../../utils/test-utils/utilities/FilterOperatorNotationTestUtils';

// Test:
describe('FilterOperatorNotation enum test', ()=> {

  describe('#EQUAL', ()=> {
    it('EQUAL should equals "="', ()=> {
      expect(FilterOperatorNotation.EQUAL).to.equal(utils.EQUAL);
    });
  });

  describe('#NOT_EQUAL', ()=> {
    it('NOT_EQUAL should equals "!="', ()=> {
      expect(FilterOperatorNotation.NOT_EQUAL).to.equal(utils.NOT_EQUAL);
    });
  });
  
  describe('#GREATER_THAN', ()=> {
    it('GREATER_THAN should equals ">"', ()=> {
      expect(FilterOperatorNotation.GREATER_THAN).to.equal(utils.GREATER_THAN);
    });
  });
  
  describe('#LOWER_THAN', ()=> {
    it('LOWER_THAN should equals "<"', ()=> {
      expect(FilterOperatorNotation.LOWER_THAN).to.equal(utils.LOWER_THAN);
    });
  });
});