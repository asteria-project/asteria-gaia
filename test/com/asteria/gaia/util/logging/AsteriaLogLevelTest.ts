import 'mocha';
import { expect } from 'chai';

// Class to test:
import { AsteriaLogLevel } from '../../../../../../src/com/asteria/gaia/util/logging/AsteriaLogLevel';

// Utilities:
import * as utils from '../../../../../../utils/test-utils/utilities/AsteriaLogLevelTestUtils';

// Test:
describe('AsteriaLogLevel enum test', ()=> {

  describe('#DEBUG', ()=> {
    it('DEBUG should equals "0"', ()=> {
      expect(AsteriaLogLevel.DEBUG).to.equal(utils.DEBUG);
    });
  });

  describe('#INFO', ()=> {
    it('INFO should equals "1"', ()=> {
      expect(AsteriaLogLevel.INFO).to.equal(utils.INFO);
    });
  });
  
  describe('#WARN', ()=> {
    it('WARN should equals "2"', ()=> {
      expect(AsteriaLogLevel.WARN).to.equal(utils.WARN);
    });
  });
  
  describe('#ERROR', ()=> {
    it('ERROR should equals "3"', ()=> {
      expect(AsteriaLogLevel.ERROR).to.equal(utils.ERROR);
    });
  });
  
  describe('#FATAL', ()=> {
    it('FATAL should equals "4"', ()=> {
      expect(AsteriaLogLevel.FATAL).to.equal(utils.FATAL);
    });
  });
});