import 'mocha';
import { expect } from 'chai';

// Class to test:
import { AsteriaRegistryAsync } from '../../../../../../../../src/com/asteria/gaia/common/lang/core/AsteriaRegistryAsync';

// Utilities:
import { AsteriaRegistryAsyncImpl } from '../../../../../../../../utils/test-utils/classes/AsteriaRegistryAsyncImpl';
import { AsteriaException } from '../../../../../../../../src/com/asteria/gaia.index';

// Test:
describe('AbstractAsteriaRegistryAsync class test', () => {

    describe('constructor', () => {

        it('#getClassName() should return the same class name as passed to the constructor function', () => {
            const CLASS_NAME: string = 'utils.test-utils.classes::AsteriaRegistryAsyncImpl';
            const instance: AsteriaRegistryAsync<string> = new AsteriaRegistryAsyncImpl<string>(CLASS_NAME);
            expect(instance.getClassName()).to.equal(CLASS_NAME);
        });
        
        it('should create an internal map reference', () => {
            const CLASS_NAME: string = 'utils.test-utils.classes::AsteriaRegistryAsyncImpl';
            const instance: AsteriaRegistryAsyncImpl<string> = new AsteriaRegistryAsyncImpl<string>(CLASS_NAME);
            expect(instance.getMap()).to.not.be.null;
        });
        
        it('should not create an internal map reference', () => {
            const CLASS_NAME: string = 'utils.test-utils.classes::AsteriaRegistryAsyncImpl';
            const instance: AsteriaRegistryAsyncImpl<string> = new AsteriaRegistryAsyncImpl<string>(CLASS_NAME, false);
            expect(instance.getMap()).to.be.null;
        });
    });

    describe('#removeId()', () => {

        it('should remove the item with the specified ID', () => {
            const ITEM: string = 'test-item';
            const CLASS_NAME: string = 'utils.test-utils.classes::AsteriaRegistryAsyncImpl';
            const instance: AsteriaRegistryAsyncImpl<string> = new AsteriaRegistryAsyncImpl<string>(CLASS_NAME);
            instance.add(ITEM, (err: AsteriaException)=> {
                instance.removeId(ITEM, (err: AsteriaException)=> {
                    expect(instance.getMap().has(ITEM)).to.be.false;
                });
            });
        });
        
        it('should die silently whether the item does not exist', () => {
            const ITEM: string = 'test-item';
            const CLASS_NAME: string = 'utils.test-utils.classes::AsteriaRegistryAsyncImpl';
            const instance: AsteriaRegistryAsyncImpl<string> = new AsteriaRegistryAsyncImpl<string>(CLASS_NAME);
            instance.add(ITEM, (err: AsteriaException)=> {
                instance.removeId(ITEM, (err: AsteriaException)=> {
                    expect(instance.getMap().has(ITEM)).to.be.false;
                });
            });
        });
    });

    describe('#get()', () => {

        it('should return the item with the specified ID', () => {
            const ITEM: string = 'test-item';
            const CLASS_NAME: string = 'utils.test-utils.classes::AsteriaRegistryAsyncImpl';
            const instance: AsteriaRegistryAsync<string> = new AsteriaRegistryAsyncImpl<string>(CLASS_NAME);
            instance.add(ITEM, (err: AsteriaException)=> {
                instance.get(ITEM, (err: AsteriaException, item: string)=> {
                    expect(item).to.equal(ITEM);
                });
            });
        });
        
        it('should return undefined whether the item does not exist', () => {
            const ITEM: string = 'test-item';
            const CLASS_NAME: string = 'utils.test-utils.classes::AsteriaRegistryAsyncImpl';
            const instance: AsteriaRegistryAsync<string> = new AsteriaRegistryAsyncImpl<string>(CLASS_NAME);
            instance.get(ITEM, (err: AsteriaException, item: string)=> {
                expect(item).to.equal(undefined);
            });
        });
    });

    describe('#has()', () => {

        it('should return true whether the item exists', () => {
            const ITEM: string = 'test-item';
            const CLASS_NAME: string = 'utils.test-utils.classes::AsteriaRegistryAsyncImpl';
            const instance: AsteriaRegistryAsync<string> = new AsteriaRegistryAsyncImpl<string>(CLASS_NAME);
            instance.add(ITEM, (err: AsteriaException)=> {
                instance.has(ITEM, (err: AsteriaException, exists: boolean)=> {
                    expect(exists).to.be.true;
                });
            });
        });
        
        it('should return false whether the item does not exist', () => {
            const ITEM: string = 'test-item';
            const CLASS_NAME: string = 'utils.test-utils.classes::AsteriaRegistryAsyncImpl';
            const instance: AsteriaRegistryAsync<string> = new AsteriaRegistryAsyncImpl<string>(CLASS_NAME);
            instance.has(ITEM, (err: AsteriaException, exists: boolean)=> {
                expect(exists).to.be.false;
            });
        });
    });
    
    describe('#getAll()', () => {

        it('should return an empty array whether no item exists', () => {
            const CLASS_NAME: string = 'utils.test-utils.classes::AsteriaRegistryAsyncImpl';
            const instance: AsteriaRegistryAsync<string> = new AsteriaRegistryAsyncImpl<string>(CLASS_NAME);
            instance.getAll((err: AsteriaException, items: Array<string>)=> {
                expect(items).to.have.lengthOf(0);
            });
        });
        
        it('should return an array with all existing items', () => {
            const ITEM_1: string = 'test-item-1';
            const ITEM_2: string = 'test-item-2';
            const ITEM_3: string = 'test-item-3';
            const CLASS_NAME: string = 'utils.test-utils.classes::AsteriaRegistryAsyncImpl';
            const instance: AsteriaRegistryAsync<string> = new AsteriaRegistryAsyncImpl<string>(CLASS_NAME);
            instance.add(ITEM_1, (err: AsteriaException)=> {
                instance.add(ITEM_2, (err: AsteriaException)=> {
                    instance.add(ITEM_3, (err: AsteriaException)=> {
                        instance.getAll((err: AsteriaException, items: Array<string>)=> {
                            expect(items).to.have.lengthOf(3);
                            expect(items.indexOf(ITEM_1)).to.not.equal(-1);
                            expect(items.indexOf(ITEM_2)).to.not.equal(-1);
                            expect(items.indexOf(ITEM_3)).to.not.equal(-1);
                        });
                    });
                });
            });
        });
    });
    
    describe('#getIds()', () => {

        it('should return an empty array whether no item exists', () => {
            const CLASS_NAME: string = 'utils.test-utils.classes::AsteriaRegistryAsyncImpl';
            const instance: AsteriaRegistryAsync<string> = new AsteriaRegistryAsyncImpl<string>(CLASS_NAME);
            instance.getIds((err: AsteriaException, items: Array<string>)=> {
                expect(items).to.have.lengthOf(0);
            });
        });
        
        it('should return an array with all existing items', () => {
            const ITEM_1: string = 'test-item-1';
            const ITEM_2: string = 'test-item-2';
            const ITEM_3: string = 'test-item-3';
            const CLASS_NAME: string = 'utils.test-utils.classes::AsteriaRegistryAsyncImpl';
            const instance: AsteriaRegistryAsync<string> = new AsteriaRegistryAsyncImpl<string>(CLASS_NAME);
            instance.add(ITEM_1, (err: AsteriaException)=> {
                instance.add(ITEM_2, (err: AsteriaException)=> {
                    instance.add(ITEM_3, (err: AsteriaException)=> {
                        instance.getIds((err: AsteriaException, items: Array<string>)=> {
                            expect(items).to.have.lengthOf(3);
                            expect(items.indexOf(ITEM_1)).to.not.equal(-1);
                            expect(items.indexOf(ITEM_2)).to.not.equal(-1);
                            expect(items.indexOf(ITEM_3)).to.not.equal(-1);
                        });
                    });
                });
            });
        });
    });
});