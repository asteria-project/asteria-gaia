import 'mocha';
import { expect } from 'chai';

// Class to test:
import { StreamProcessType } from '../../../../../src/com/asteria/gaia/process/StreamProcessType';

// Utilities:
import * as utils from '../../../../../utils/test-utils/utilities/StreamProcessTypeTestUtils';

// Test:
describe('StreamProcessType enum test', ()=> {

  describe('#READABLE', ()=> {
    it('READABLE should equals "0"', ()=> {
      expect(StreamProcessType.READABLE).to.equal(utils.READABLE);
    });
  });

  describe('#TRANSFORM', ()=> {
    it('TRANSFORM should equals "1"', ()=> {
      expect(StreamProcessType.TRANSFORM).to.equal(utils.TRANSFORM);
    });
  });
  
  describe('#WRITABLE', ()=> {
    it('WRITABLE should equals "2"', ()=> {
      expect(StreamProcessType.WRITABLE).to.equal(utils.WRITABLE);
    });
  });
});