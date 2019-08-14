import 'mocha';
import { expect } from 'chai';

// Class to test:
import { CommonRegExp } from '../../../../../../../src/com/asteria/gaia/common/lang/util/CommonRegExp';

// Test:
describe('CommonRegExp class test', ()=> {

  describe('#NEW_LINE', ()=> {
    it('should silently fail whether no new line chars can be found', ()=> {
        const txt: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
        expect(CommonRegExp.NEW_LINE.test(txt)).to.be.false;
    });

    it('should find new line chars', ()=> {
        const txt: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,\nsed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
        expect(CommonRegExp.NEW_LINE.test(txt)).to.be.true;
    });
    
    it('should find carriage return chars', ()=> {
        const txt: string = ` Lorem ipsum dolor sit amet, consectetur adipiscing elit,
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`;
        expect(CommonRegExp.NEW_LINE.test(txt)).to.be.true;
    });
    
    it('should find combination of new line chars and carriage return chars', ()=> {
        const txt: string = ` Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`;
        expect(CommonRegExp.NEW_LINE.test(txt)).to.be.true;
    });
  });
});