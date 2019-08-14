import 'mocha';
import { expect } from 'chai';

// Class to test:
import { CommonChar } from '../../../../../../../src/com/asteria/gaia/common/lang/util/CommonChar';

// Utilities:
import * as utils from '../../../../../../../utils/test-utils/utilities/CommonCharTestUtils';

// Test:
describe('CommonChar enum test', ()=> {

  describe('#EMPTY', ()=> {
    it('EMPTY should be an empty string', ()=> {
      expect(CommonChar.EMPTY).to.equal(utils.EMPTY);
    });
  });

  describe('#WHITE_SPACE', ()=> {
    it('WHITE_SPACE should be a white space', ()=> {
      expect(CommonChar.WHITE_SPACE).to.equal(utils.WHITE_SPACE);
    });
  });

  describe('#NEW_LINE', ()=> {
    it('NEW_LINE should equals "\n"', ()=> {
      expect(CommonChar.NEW_LINE).to.equal(utils.NEW_LINE);
    });
  });

  describe('#DOT', ()=> {
    it('DOT should equals "."', ()=> {
      expect(CommonChar.DOT).to.equal(utils.DOT);
    });
  });

  describe('#COMMA', ()=> {
    it('COMMA should equals ","', ()=> {
      expect(CommonChar.COMMA).to.equal(utils.COMMA);
    });
  });

  describe('#SLASH', ()=> {
    it('SLASH should equals "/"', ()=> {
      expect(CommonChar.SLASH).to.equal(utils.SLASH);
    });
  });

  describe('#COLON', ()=> {
    it('COLON should equals ":"', ()=> {
      expect(CommonChar.COLON).to.equal(utils.COLON);
    });
  });

  describe('#SEMICOLON', ()=> {
    it('SEMICOLON should equals ";"', ()=> {
      expect(CommonChar.SEMICOLON).to.equal(utils.SEMICOLON);
    });
  });
});