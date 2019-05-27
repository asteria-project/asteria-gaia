/**
 * The <code>AsteriaErrorCode</code> enum defines all error code specified by the Asteria project.
 */
export enum AsteriaErrorCode {

    //--> Process errors: 1XX

    /**
     * Indicates that an Asteria process failed.
     */
    PROCESS_FAILURE = 100,
    
    /**
     * Indicates that initialization of an Asteria process failed.
     */
    INITIALIZATION_FAILURE = 101,

    //--> Config errors: 2XX

    /**
     * Indicates that a configuration is not valid.
     */
    INVALID_CONFIG = 200,

    /**
     * Indicates that a parameter is missing.
     */
    MISSING_PARAMETER = 201,

    /**
     * Indicates that a parameter is not valid.
     */
    INVALID_PARAMETER = 202,

    /**
     * Indicates that a no Asteria session is specified.
     */
    MISSING_SESSION_CONFIG = 203,

    /**
     * Indicates that no Asteria session name is specified.
     */
    MISSING_SESSION_NAME = 204,
    
    /**
     * Indicates that the Asteria session name is not valid.
     */
    INVALID_SESSION_NAME = 205,
    
    /**
     * Indicates that an Asteria filter is missing.
     */
    MISSING_FILTER = 206,

    /**
     * Indicates that an Asteria filter is not valid.
     */
    INVALID_FILTER = 207,

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
    INVALID_ASQL_CONDITION = 303,

    //--> IO errors: 4XX

    /**
     * Indicates failure while loading a file.
     */
    FILE_READ_ERROR = 400,
    
    /**
     * Indicates failure while writing a file.
     */
    FILE_WRITE_ERROR = 401
}
