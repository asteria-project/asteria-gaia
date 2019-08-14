import 'mocha';
import { expect } from 'chai';

// Class to test:
import { StreamEventType } from '../../../../../../../src/com/asteria/gaia/common/lang/stream/StreamEventType';

// Utilities:
import * as utils from '../../../../../../../utils/test-utils/utilities/StreamEventTypeTestUtils';

// Test:
describe('StreamEventType enum test', ()=> {

  describe('#CLOSE', ()=> {
    it('CLOSE should equals "close"', ()=> {
      expect(StreamEventType.CLOSE).to.equal(utils.CLOSE);
    });
  });

  describe('#DRAIN', ()=> {
    it('DRAIN should equals "drain"', ()=> {
      expect(StreamEventType.DRAIN).to.equal(utils.DRAIN);
    });
  });

  describe('#DATA', ()=> {
    it('DATA should equals "data"', ()=> {
      expect(StreamEventType.DATA).to.equal(utils.DATA);
    });
  });

  describe('#ERROR', ()=> {
    it('ERROR should equals "error"', ()=> {
      expect(StreamEventType.ERROR).to.equal(utils.ERROR);
    });
  });

  describe('#FINISH', ()=> {
    it('FINISH should equals "finish"', ()=> {
      expect(StreamEventType.FINISH).to.equal(utils.FINISH);
    });
  });

  describe('#PIPE', ()=> {
    it('PIPE should equals "pipe"', ()=> {
      expect(StreamEventType.PIPE).to.equal(utils.PIPE);
    });
  });

  describe('#UNPIPE', ()=> {
    it('UNPIPE should equals "unpipe"', ()=> {
      expect(StreamEventType.UNPIPE).to.equal(utils.UNPIPE);
    });
  });
});