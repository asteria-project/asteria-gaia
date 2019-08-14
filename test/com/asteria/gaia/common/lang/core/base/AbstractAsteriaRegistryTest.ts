import 'mocha';
import { expect } from 'chai';

// Class to test:
import { AsteriaRegistry } from '../../../../../../../../src/com/asteria/gaia/common/lang/core/AsteriaRegistry';

// Utilities:
import { AsteriaRegistryImpl } from '../../../../../../../../utils/test-utils/classes/AsteriaRegistryImpl';

// Test:
describe('AbstractAsteriaRegistry class test', () => {

    describe('constructor', () => {

        it('#getClassName() should return the same class name as passed to the constructor function', () => {
            const CLASS_NAME: string = 'utils.test-utils.classes::AsteriaRegistryImpl';
            const instance: AsteriaRegistry<string> = new AsteriaRegistryImpl<string>(CLASS_NAME);
            expect(instance.getClassName()).to.equal(CLASS_NAME);
        });
        
        it('should create an internal map reference', () => {
            const CLASS_NAME: string = 'utils.test-utils.classes::AsteriaRegistryImpl';
            const instance: AsteriaRegistryImpl<string> = new AsteriaRegistryImpl<string>(CLASS_NAME);
            expect(instance.getMap()).to.not.be.null;
        });
        
        it('should not create an internal map reference', () => {
            const CLASS_NAME: string = 'utils.test-utils.classes::AsteriaRegistryImpl';
            const instance: AsteriaRegistryImpl<string> = new AsteriaRegistryImpl<string>(CLASS_NAME, false);
            expect(instance.getMap()).to.be.null;
        });
    });

    describe('#removeId()', () => {

        it('should remove the item with the specified ID', () => {
            const ITEM: string = 'test-item';
            const CLASS_NAME: string = 'utils.test-utils.classes::AsteriaRegistryImpl';
            const instance: AsteriaRegistry<string> = new AsteriaRegistryImpl<string>(CLASS_NAME);
            instance.add(ITEM);
            instance.removeId(ITEM);
            expect(instance.has(ITEM)).to.be.false;
        });
        
        it('should die silently whether the item does not exist', () => {
            const ITEM: string = 'test-item';
            const CLASS_NAME: string = 'utils.test-utils.classes::AsteriaRegistryImpl';
            const instance: AsteriaRegistry<string> = new AsteriaRegistryImpl<string>(CLASS_NAME);
            instance.removeId(ITEM);
            expect(instance.has(ITEM)).to.be.false;
        });
    });

    describe('#get()', () => {

        it('should return the item with the specified ID', () => {
            const ITEM: string = 'test-item';
            const CLASS_NAME: string = 'utils.test-utils.classes::AsteriaRegistryImpl';
            const instance: AsteriaRegistry<string> = new AsteriaRegistryImpl<string>(CLASS_NAME);
            instance.add(ITEM);
            expect(instance.get(ITEM)).to.equal(ITEM);
        });
        
        it('should return undefined whether the item does not exist', () => {
            const ITEM: string = 'test-item';
            const CLASS_NAME: string = 'utils.test-utils.classes::AsteriaRegistryImpl';
            const instance: AsteriaRegistry<string> = new AsteriaRegistryImpl<string>(CLASS_NAME);
            expect(instance.get(ITEM)).to.equal(undefined)
        });
    });

    describe('#has()', () => {

        it('should return true whether the item exists', () => {
            const ITEM: string = 'test-item';
            const CLASS_NAME: string = 'utils.test-utils.classes::AsteriaRegistryImpl';
            const instance: AsteriaRegistry<string> = new AsteriaRegistryImpl<string>(CLASS_NAME);
            instance.add(ITEM);
            expect(instance.has(ITEM)).to.be.true;
        });
        
        it('should return false whether the item does not exist', () => {
            const ITEM: string = 'test-item';
            const CLASS_NAME: string = 'utils.test-utils.classes::AsteriaRegistryImpl';
            const instance: AsteriaRegistry<string> = new AsteriaRegistryImpl<string>(CLASS_NAME);
            expect(instance.has(ITEM)).to.be.false;
        });
    });
    
    describe('#getAll()', () => {

        it('should return an empty array whether no item exists', () => {
            const CLASS_NAME: string = 'utils.test-utils.classes::AsteriaRegistryImpl';
            const instance: AsteriaRegistry<string> = new AsteriaRegistryImpl<string>(CLASS_NAME);
            expect(instance.getAll()).to.have.lengthOf(0);
        });
        
        it('should return an array with all existing items', () => {
            const ITEM_1: string = 'test-item-1';
            const ITEM_2: string = 'test-item-2';
            const ITEM_3: string = 'test-item-3';
            const CLASS_NAME: string = 'utils.test-utils.classes::AsteriaRegistryImpl';
            const instance: AsteriaRegistry<string> = new AsteriaRegistryImpl<string>(CLASS_NAME);
            instance.add(ITEM_1);
            instance.add(ITEM_2);
            instance.add(ITEM_3);
            const result: Array<string> = instance.getAll();
            expect(result.indexOf(ITEM_1)).to.not.equal(-1);
            expect(result.indexOf(ITEM_2)).to.not.equal(-1);
            expect(result.indexOf(ITEM_3)).to.not.equal(-1);
        });
    });
    
    describe('#getIds()', () => {

        it('should return an empty array whether no item exists', () => {
            const CLASS_NAME: string = 'utils.test-utils.classes::AsteriaRegistryImpl';
            const instance: AsteriaRegistry<string> = new AsteriaRegistryImpl<string>(CLASS_NAME);
            expect(instance.getIds()).to.have.lengthOf(0);
        });
        
        it('should return an array with all existing item keys', () => {
            const ITEM_1: string = 'test-item-1';
            const ITEM_2: string = 'test-item-2';
            const ITEM_3: string = 'test-item-3';
            const CLASS_NAME: string = 'utils.test-utils.classes::AsteriaRegistryImpl';
            const instance: AsteriaRegistry<string> = new AsteriaRegistryImpl<string>(CLASS_NAME);
            instance.add(ITEM_1);
            instance.add(ITEM_2);
            instance.add(ITEM_3);
            const result: Array<string> = instance.getIds();
            expect(result.indexOf(ITEM_1)).to.not.equal(-1);
            expect(result.indexOf(ITEM_2)).to.not.equal(-1);
            expect(result.indexOf(ITEM_3)).to.not.equal(-1);
        });
    });
});