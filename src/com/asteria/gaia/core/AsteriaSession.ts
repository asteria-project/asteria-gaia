import { AsteriaContext } from './AsteriaContext';

/**
 * The <code>AsteriaSession</code> interface represents an Asteria application session.
 */
export interface AsteriaSession {

    /**
     * Return the context of this Asteria session.
     * 
     * @returns {AsteriaContext} the context of this Asteria sessi
     */
    getContext(): AsteriaContext;
}
