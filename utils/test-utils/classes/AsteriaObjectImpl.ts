import { AbstractAsteriaObject } from '../../../src/com/asteria/gaia/common/lang/core/base/AbstractAsteriaObject';

/**
 * Utility class for testing the <code>AbstractAsteriaObject</code> class.
 */
export class AsteriaObjectImpl extends AbstractAsteriaObject {

    /**
     * Create a new <code>AsteriaObjectImpl</code> instance.
     * 
     * @param {string} className the fully qualified class name for this object.
     */
    constructor(className: string) {
        super(className);
    }
}