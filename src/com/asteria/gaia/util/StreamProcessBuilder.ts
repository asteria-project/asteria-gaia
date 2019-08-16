import { StreamProcessConfig } from '../config/StreamProcessConfig';
import { StreamProcess } from '../process/StreamProcess';
import { AsteriaObject } from '../common/lang/core/AsteriaObject';

/**
 * Provides functionalities for building <code>StreamProcess</code> objects.
 */
export interface StreamProcessBuilder extends AsteriaObject {

    /**
     * Build and return a new <code>StreamProcess</code> object.
     * 
     * @param {any} processClass the type of the new <code>StreamProcess</code> object.
     * @param {StreamProcessConfig} config the config associated with the new <code>StreamProcess</code> object. 
     * 
     * @returns {StreamProcess} a new <code>StreamProcess</code> object.
     */
    build(processClass: any, config?: StreamProcessConfig): StreamProcess;
}
