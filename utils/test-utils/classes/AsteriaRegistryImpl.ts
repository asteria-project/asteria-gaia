
import { AbstractAsteriaRegistry } from '../../../src/com/asteria/gaia/common/lang/core/base/AbstractAsteriaRegistry';

/**
 * Utility class for testing the <code>AbstractAsteriaRegistry</code> class.
 */
export class AsteriaRegistryImpl<T> extends AbstractAsteriaRegistry<T> {

    /**
     * Create a new <code>AsteriaRegistryImpl</code> instance.
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
    public add(item: T): void {
        this.MAP.set(String(item), item);
    }
    
    /**
     * @inheritdoc
     */
    public remove(item: T): void {
        this.MAP.delete(String(item));
    }

    /**
     * Utility method for accessing the internal map reference.
     */
    public getMap(): Map<string, T> {
        return this.MAP;
    }
}