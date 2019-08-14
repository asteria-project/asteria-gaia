import 'mocha';
import { expect } from 'chai';

// Class to test:
import { FilterOperator } from '../../../../../src/com/asteria/gaia/filter/FilterOperator';

// Utilities:
import * as utils from '../../../../../utils/test-utils/utilities/FilterOperatorTestUtils';

// Test:
describe('FilterOperator enum test', ()=> {

  describe('#EQUAL', ()=> {
    it('EQUAL should equals "EQUAL"', ()=> {
      expect(FilterOperator.EQUAL).to.equal(utils.EQUAL);
    });
  });

  describe('#NOT_EQUAL', ()=> {
    it('NOT_EQUAL should equals "NOT_EQUAL"', ()=> {
      expect(FilterOperator.NOT_EQUAL).to.equal(utils.NOT_EQUAL);
    });
  });
  
  describe('#LIKE', ()=> {
    it('LIKE should equals "LIKE"', ()=> {
      expect(FilterOperator.LIKE).to.equal(utils.LIKE);
    });
  });
  
  describe('#NOT_LIKE', ()=> {
    it('NOT_LIKE should equals "NOT_LIKE"', ()=> {
      expect(FilterOperator.NOT_LIKE).to.equal(utils.NOT_LIKE);
    });
  });
  
  describe('#STARTS_WITH', ()=> {
    it('STARTS_WITH should equals "STARTS_WITH"', ()=> {
      expect(FilterOperator.STARTS_WITH).to.equal(utils.STARTS_WITH);
    });
  });
  
  describe('#ENDS_WITH', ()=> {
    it('ENDS_WITH should equals "ENDS_WITH"', ()=> {
      expect(FilterOperator.ENDS_WITH).to.equal(utils.ENDS_WITH);
    });
  });
  
  describe('#GREATER_THAN', ()=> {
    it('GREATER_THAN should equals "GREATER_THAN"', ()=> {
      expect(FilterOperator.GREATER_THAN).to.equal(utils.GREATER_THAN);
    });
  });
  
  describe('#LOWER_THAN', ()=> {
    it('LOWER_THAN should equals "LOWER_THAN"', ()=> {
      expect(FilterOperator.LOWER_THAN).to.equal(utils.LOWER_THAN);
    });
  });
});