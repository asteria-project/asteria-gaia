import { AsteriaException } from '../exception/AsteriaException';
import { AsteriaObject } from './AsteriaObject';

/**
 * The <code>AsteriaRegistryAsync</code> interface defines the API that you must implement to create asynchronous  
 * registries in Asteria projects.
 */
export interface AsteriaRegistryAsync<T> extends AsteriaObject {

    /**
     * Add the specified item to the registry.
     * 
     * @param {T} item the item to add to the registry.
     * @param {(err: AsteriaException)=> void} callback the callback method invoked once the item has been added.
     */
    add(item: T, callback: (err: AsteriaException)=> void): void;

    /**
     * Remove the specified item from the registry.
     * 
     * @param {T} item the item to remove from the registry.
     * @param {(err: AsteriaException)=> void} callback the callback method invoked once the item has been removed.
     */
    remove(item: T, callback: (err: AsteriaException)=> void): void;

    /**
     * Indicate whether the item with the specified identifier is registered in this registry (<code>true</code>),
     * or not (<code>false</code>).
     * 
     * @param {string} id the identifier of the item to check.
     * @param {(err: AsteriaException, item: boolean)=> void)} callback the callback method invoked once process is
     *                                                                  finished.
     */
    has(id: string, callback: (err: AsteriaException, exists: boolean)=> void): void;
    
    /**
     * Return the item with the specified identifier.
     * 
     * @param {string} id the identifier of the item to get.
     * @param {(err: AsteriaException, item: T)=> void)} callback the callback method invoked once the item has been 
     *                                                            found.
     */
    get(id: string, callback: (err: AsteriaException, item: T)=> void): void;
    
    /**
     * Return an array of all items declared in this registry.
     * 
     * @param {(err: AsteriaException, items: Array<T>)=> void)} callback the callback method invoked once the items
     *                                                                    have been collected.
     */
    getAll(callback: (err: AsteriaException, items: Array<T>)=> void): void;

    /**
     * Return an array of all identifiers declared in this registry.
     * 
     * @param {(err: AsteriaException, items: Array<string>)=> void)} callback the callback method invoked once the 
     *                                                                         identifiers have been collected.
     */
    getIds(callback: (err: AsteriaException, items: Array<string>)=> void):void;
}