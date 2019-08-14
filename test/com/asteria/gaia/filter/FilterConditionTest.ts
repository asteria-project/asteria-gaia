import 'mocha';
import { expect } from 'chai';

// Class to test:
import { FilterCondition } from '../../../../../src/com/asteria/gaia/filter/FilterCondition';

// Utilities:
import * as utils from '../../../../../utils/test-utils/utilities/FilterConditionTestUtils';

// Test:
describe('FilterCondition enum test', ()=> {

  describe('#AND', ()=> {
    it('AND should equals "AND"', ()=> {
      expect(FilterCondition.AND).to.equal(utils.AND);
    });
  });

  describe('#OR', ()=> {
    it('OR should equals "OR"', ()=> {
      expect(FilterCondition.OR).to.equal(utils.OR);
    });
  });
});