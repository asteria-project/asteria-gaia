import { AsteriaException } from '../exception/AsteriaException';
import { Subscribable } from 'rxjs';

/**
 * The <code>AsteriaRegistry</code> interface defines the API that you must implement to create registries in Asteria
 * projects.
 */
export interface AsteriaRegistry<T> {

    /**
     * Add the specified item to the registry.
     * 
     * @param {T} item the item to add to the registry.
     * 
     * @returns {Subscribable<T>} an observable of the item added to the registry.
     */
    add(item: T): Subscribable<T>;

    /**
     * Remove the specified item from the registry.
     * 
     * @param {T} item the item to remove from the registry.
     * 
     * @returns {Subscribable<T>} an observable of the item removed from the registry.
     */
    remove(item: T): Subscribable<T>;

    /**
     * Indicate whether the item with the specified identifier is registered in this registry (<code>true</code>),
     * or not (<code>false</code>).
     * 
     * @param {string} id the identifier of the item to check.
     * 
     * @returns {Subscribable<boolean>} an observable of <code>true</code>  whether the item with the specified
     *                                  identifier is registered in this registry.
     */
    has(id: string): Subscribable<boolean>;
    
    /**
     * Return the item with the specified identifier.
     * 
     * @param {string} id the identifier of the item to get.
     * 
     * @returns {Subscribable<T>} an observable of the item found in the registry.
     */
    get(id: string): Subscribable<T>;
    
    /**
     * Return an array of all items declared in this registry.
     * 
     * @returns {Subscribable<Array<T>>} an observable of all items found in the registry.
     */
    getAll(): Subscribable<Array<T>>;

    /**
     * Return an array of all identifiers declared in this registry.
     * 
     * @returns {Subscribable<Array<string>>} an observable of all identifiers found in the registry.
     */
    getIds(): Subscribable<Array<string>>;
}