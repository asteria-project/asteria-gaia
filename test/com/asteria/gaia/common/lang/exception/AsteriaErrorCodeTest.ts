import 'mocha';
import { expect } from 'chai';

// Class to test:
import { AsteriaErrorCode } from '../../../../../../../src/com/asteria/gaia/common/lang/exception/AsteriaErrorCode';

// Utilities:
import * as utils from '../../../../../../../utils/test-utils/utilities/AsteriaErrorCodeTestUtils';

// Test:
describe('AsteriaErrorCode enum test', ()=> {

  describe('#PROCESS_FAILURE', ()=> {
    it('PROCESS_FAILURE should equals "100"', ()=> {
      expect(AsteriaErrorCode.PROCESS_FAILURE).to.equal(utils.PROCESS_FAILURE);
    });
  });

  describe('#INITIALIZATION_FAILURE', ()=> {
    it('INITIALIZATION_FAILURE should equals "101"', ()=> {
      expect(AsteriaErrorCode.INITIALIZATION_FAILURE).to.equal(utils.INITIALIZATION_FAILURE);
    });
  });

  describe('#INVALID_CONFIG', ()=> {
    it('INVALID_CONFIG should equals "200"', ()=> {
      expect(AsteriaErrorCode.INVALID_CONFIG).to.equal(utils.INVALID_CONFIG);
    });
  });

  describe('#MISSING_PARAMETER', ()=> {
    it('MISSING_PARAMETER should equals "201"', ()=> {
      expect(AsteriaErrorCode.MISSING_PARAMETER).to.equal(utils.MISSING_PARAMETER);
    });
  });

  describe('#INVALID_PARAMETER', ()=> {
    it('INVALID_PARAMETER should equals "202"', ()=> {
      expect(AsteriaErrorCode.INVALID_PARAMETER).to.equal(utils.INVALID_PARAMETER);
    });
  });

  describe('#MISSING_SESSION_CONFIG', ()=> {
    it('MISSING_SESSION_CONFIG should equals "203"', ()=> {
      expect(AsteriaErrorCode.MISSING_SESSION_CONFIG).to.equal(utils.MISSING_SESSION_CONFIG);
    });
  });

  describe('#MISSING_SESSION_NAME', ()=> {
    it('MISSING_SESSION_NAME should equals "204"', ()=> {
      expect(AsteriaErrorCode.MISSING_SESSION_NAME).to.equal(utils.MISSING_SESSION_NAME);
    });
  });

  describe('#INVALID_SESSION_NAME', ()=> {
    it('INVALID_SESSION_NAME should equals "205"', ()=> {
      expect(AsteriaErrorCode.INVALID_SESSION_NAME).to.equal(utils.INVALID_SESSION_NAME);
    });
  });

  describe('#MISSING_FILTER', ()=> {
    it('MISSING_FILTER should equals "206"', ()=> {
      expect(AsteriaErrorCode.MISSING_FILTER).to.equal(utils.MISSING_FILTER);
    });
  });

  describe('#INVALID_FILTER', ()=> {
    it('INVALID_FILTER should equals "207"', ()=> {
      expect(AsteriaErrorCode.INVALID_FILTER).to.equal(utils.INVALID_FILTER);
    });
  });

  describe('#MISSING_ASQL_QUERY', ()=> {
    it('MISSING_ASQL_QUERY should equals "300"', ()=> {
      expect(AsteriaErrorCode.MISSING_ASQL_QUERY).to.equal(utils.MISSING_ASQL_QUERY);
    });
  });

  describe('#INVALID_ASQL_QUERY', ()=> {
    it('INVALID_ASQL_QUERY should equals "301"', ()=> {
      expect(AsteriaErrorCode.INVALID_ASQL_QUERY).to.equal(utils.INVALID_ASQL_QUERY);
    });
  });
  
  describe('#INVALID_ASQL_OPERAND', ()=> {
    it('INVALID_ASQL_OPERAND should equals "302"', ()=> {
      expect(AsteriaErrorCode.INVALID_ASQL_OPERAND).to.equal(utils.INVALID_ASQL_OPERAND);
    });
  });
  
  describe('#INVALID_ASQL_CONDITION', ()=> {
    it('INVALID_ASQL_CONDITION should equals "303"', ()=> {
      expect(AsteriaErrorCode.INVALID_ASQL_CONDITION).to.equal(utils.INVALID_ASQL_CONDITION);
    });
  });

  describe('#FILE_READ_ERROR', ()=> {
    it('FILE_READ_ERROR should equals "400"', ()=> {
      expect(AsteriaErrorCode.FILE_READ_ERROR).to.equal(utils.FILE_READ_ERROR);
    });
  });
  
  describe('#FILE_WRITE_ERROR', ()=> {
    it('INVALID_ASQL_OPERAND should equals "401"', ()=> {
      expect(AsteriaErrorCode.FILE_WRITE_ERROR).to.equal(utils.FILE_WRITE_ERROR);
    });
  });
});