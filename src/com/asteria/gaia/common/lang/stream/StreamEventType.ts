/**
 * The <code>StreamEventType</code> enum defines the possible values for events defined in Asteria streams based on the
 * Node.js platform.
 */
export enum StreamEventType {

    /**
     * Represents an event of the type of <code>close</code>.
     */
    CLOSE = 'close',
    
    /**
     * Represents an event of the type of <code>drain</code>.
     */
    DRAIN = 'drain',

    /**
     * Represents an event of the type of <code>data</code>.
     */
    DATA = 'data',

    /**
     * Represents an event of the type of <code>error</code>.
     */
    ERROR = 'error',

    /**
     * Represents an event of the type of <code>finish</code>.
     */
    FINISH = 'finish',
    
    /**
     * Represents an event of the type of <code>pipe</code>.
     */
    PIPE = 'pipe',
    
    /**
     * Represents an event of the type of <code>unpipe</code>.
     */
    UNPIPE = 'unpipe'
}
