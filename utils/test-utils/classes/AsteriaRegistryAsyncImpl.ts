

import { AbstractAsteriaRegistryAsync } from '../../../src/com/asteria/gaia/common/lang/core/base/AbstractAsteriaRegistryAsync';
import { AsteriaException } from '../../../src/com/asteria/gaia.index';

/**
 * Utility class for testing the <code>AbstractAsteriaRegistryAsync</code> class.
 */
export class AsteriaRegistryAsyncImpl<T> extends AbstractAsteriaRegistryAsync<T> {

    /**
     * Create a new <code>AsteriaRegistryAsyncImpl</code> instance.
     * 
     * @param {string} className the fully qualified class name for this object.
     * @param {boolean} createMap a boolean value that indicates whether to use an internal map (<code>true</code>),
     *                            or not (<code>false</code>).
     */
    constructor(className: string, createMap: boolean = true) {
        super(className, createMap);
    }
    
    /**
     * @inheritdoc
     */
    public add(item: T, callback: (err: AsteriaException)=> void): void {
        this.MAP.set(String(item), item);
        callback(null);
    }
    
    /**
     * @inheritdoc
     */
    public remove(item: T, callback: (err: AsteriaException)=> void): void {
        this.MAP.delete(String(item));
        callback(null);
    }

    /**
     * Utility method for accessing the internal map reference.
     */
    public getMap(): Map<string, T> {
        return this.MAP;
    }
}