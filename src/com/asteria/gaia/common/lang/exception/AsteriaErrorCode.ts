/**
 * The <code>AsteriaErrorCode</code> enum defines all error code specified by the Asteria project.
 */
export enum AsteriaErrorCode {

    //--> Process errors: 1XX

    /**
     * Indicates that an Asteria process failed.
     */
    PROCESS_FAILURE = 100,
    
    //--> Process errors: 2XX

    /**
     * Indicates that a parameter is missing.
     */
    MISSING_PARAMETER = 200,

    /**
     * Indicates that a parameter is not valid.
     */
    INVALID_PARAMETER = 201,
    
    /**
     * Indicates that an Asteria filter is missing.
     */
    MISSING_FILTER = 202,

    /**
     * Indicates that an Asteria filter is not valid.
     */
    INVALID_FILTER = 203,

    //--> AsQL errors: 3XX

    /**
     * Indicates that an AsQL query is missing.
     */
    MISSING_ASQL_QUERY = 300,

    /**
     * Indicates that an AsQL query is not valid.
     */
    INVALID_ASQL_QUERY = 301,
    
    /**
     * Indicates that an AsQL query operand is not well-formed.
     */
    INVALID_ASQL_OPERAND = 302,

    /**
     * Indicates that an AsQL query condition is not valid.
     */
    INVALID_ASQL_CONDITION = 303
}
