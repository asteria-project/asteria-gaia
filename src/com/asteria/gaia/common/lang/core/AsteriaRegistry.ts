import { AsteriaObject } from './AsteriaObject';

/**
 * The <code>AsteriaRegistry</code> interface defines the API that you must implement to create synchronous registries  
 * in Asteria projects.
 */
export interface AsteriaRegistry<T> extends AsteriaObject {

    /**
     * Add the specified item to the registry.
     * 
     * @param {T} item the item to add to the registry.
     */
    add(item: T): void;

    /**
     * Remove the specified item from the registry.
     * 
     * @param {T} item the item to remove from the registry.
     */
    remove(item: T): void;

    /**
     * Indicate whether the item with the specified identifier is registered in this registry (<code>true</code>),
     * or not (<code>false</code>).
     * 
     * @param {string} id the identifier of the item to check.
     * 
     * @returns {boolean} <code>true</code> whether the item with the specified identifier is registered in this
     *                    registry; <code>false</code> otherwise
     */
    has(id: string): boolean;
    
    /**
     * Return the item with the specified identifier.
     * 
     * @param {string} id the identifier of the item to get.
     * 
     * @returns {T} the item with the specified identifier.
     */
    get(id: string): T;
    
    /**
     * Return an array of all items declared in this registry.
     * 
     * @returns {Array<T>} an array of all items declared in this registry.
     */
    getAll(): Array<T>;

    /**
     * Return an array of all identifiers declared in this registry.
     * 
     * @returns {Array<string>} an array of all identifiers declared in this registry.
     */
    getIds(): Array<string>;
}