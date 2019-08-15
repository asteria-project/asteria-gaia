import { StreamProcess } from './StreamProcess';
import { AsteriaStream } from '../core/AsteriaStream';

/**
 * The <code>StreamProcessor</code> interface provides operations for working and processing with data as defined
 * by Asteria processes.
 */
export interface StreamProcessor {

    /**
     * Add the specified stream process to this processor.
     * 
     * @param {StreamProcess} process the stream process to add to this processor.
     * 
     * @returns {StreamProcessor} a reference to this <code>StreamProcessor</code> object.
     */
    add(process: StreamProcess): StreamProcessor;

    /**
     * Remove the specified stream process from this processor.
     * 
     * @param {StreamProcess} process the stream process to remove from this processor.
     * 
     * @returns {StreamProcessor} a reference to this <code>StreamProcessor</code> object.
     */
    remove(process: StreamProcess): StreamProcessor;

    /**
     * Run all processes registered in this processor and return the last registered stream.
     * 
     * @returns {AsteriaStream} the last stream registered in this processor.
     */
    run(): AsteriaStream;

    /**
     * Return the number of processes registered in this <code>StreamProcessor</code> object.
     * 
     * @returns {number} the number of processes registered in this <code>StreamProcessor</code> object.
     */
    size(): number;
}
