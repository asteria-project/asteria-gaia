/*!
 * Asteria Gaia Node Module
 * Copyright(c) 2019 Pascal ECHEMANN
 * Apache 2.0 Licensed
 * This is a part of the Asteria Project: <https://github.com/asteria-project>
 */

declare module "asteria-gaia" {

export abstract class AbstractAsteriaObject implements AsteriaObject {    private readonly _className;    constructor(className: string);    getClassName(): string;}export abstract class AbstractAsteriaRegistry<T> extends AbstractAsteriaObject implements AsteriaRegistry<T> {    protected readonly MAP: Map<string, T>;    protected constructor(classRef: string, createMap?: boolean);    abstract add(item: T, callback: (err: AsteriaException) => void): void;    abstract remove(item: T, callback: (err: AsteriaException) => void): void;    get(id: string, callback: (err: AsteriaException, item: T) => void): void;    has(id: string, callback: (err: AsteriaException, exists: boolean) => void): void;    getAll(callback: (err: AsteriaException, items: Array<T>) => void): void;    getIds(callback: (err: AsteriaException, items: Array<string>) => void): void;}export interface AsteriaLine {    index: number;    value: string;}export interface AsteriaObject {    getClassName(): string;}export interface AsteriaRegistry<T> {    add(item: T, callback: (err: AsteriaException) => void): void;    remove(item: T, callback: (err: AsteriaException) => void): void;    has(id: string, callback: (err: AsteriaException, exists: boolean) => void): void;    get(id: string, callback: (err: AsteriaException, item: T) => void): void;    getAll(callback: (err: AsteriaException, items: Array<T>) => void): void;    getIds(callback: (err: AsteriaException, items: Array<string>) => void): void;}export class AsteriaError extends AbstractAsteriaObject {    constructor(code: AsteriaErrorCode, className: string, message: string, stack?: string);    readonly code: AsteriaErrorCode;    readonly message: string;    readonly className: string;    readonly stack: string;    toString(): string;}export enum AsteriaErrorCode {    PROCESS_FAILURE = 100,    INITIALIZATION_FAILURE = 101,    INVALID_CONFIG = 200,    MISSING_PARAMETER = 201,    INVALID_PARAMETER = 202,    MISSING_SESSION_CONFIG = 203,    MISSING_SESSION_NAME = 204,    INVALID_SESSION_NAME = 205,    MISSING_FILTER = 206,    INVALID_FILTER = 207,    MISSING_ASQL_QUERY = 300,    INVALID_ASQL_QUERY = 301,    INVALID_ASQL_OPERAND = 302,    INVALID_ASQL_CONDITION = 303,    FILE_READ_ERROR = 400,    FILE_WRITE_ERROR = 401}export class AsteriaException extends Error {    constructor(code: AsteriaErrorCode, message: string, stack?: string);    readonly code: AsteriaErrorCode;    toString(): string;}export enum HttpMethod {    GET = "GET",    POST = "POST",    PUT = "PUT",    DELETE = "DELETE",    HEAD = "HEAD",    OPTIONS = "OPTIONS",    TRACE = "TRACE",    CONNECT = "CONNECT"}export enum HttpStatusCode {    CONTINUE = 100,    SWITCHING_PROTOCOLS = 101,    PROCESSING = 102,    OK = 200,    CREATED = 201,    ACCEPTED = 202,    NON_AUTHORITATIVE_INFORMATION = 203,    NO_CONTENT = 204,    RESET_CONTENT = 205,    PARTIAL_CONTENT = 206,    MULTI_STATUS = 207,    ALREADY_REPORTED = 208,    IM_USED = 226,    MULTIPLE_CHOICES = 300,    MOVED_PERMANENTLY = 301,    FOUND = 302,    SEE_OTHER = 303,    NOT_MODIFIED = 304,    USE_PROXY = 305,    TEMPORARY_REDIRECT = 307,    PERMANENT_REDIRECT = 308,    BAD_REQUEST = 400,    UNAUTHORIZED = 401,    PAYMENT_REQUIRED = 402,    FORBIDEN = 403,    NOT_FOUND = 404,    METHOD_NOT_ALLOWED = 405,    NOT_ACCEPTABLE = 406,    PROXY_AUTHENTICATION_REQUIRED = 407,    REQUEST_TIMEOUT = 408,    CONFLICT = 409,    GONE = 410,    LENGTH_REQUIRED = 411,    PRECONDITION_FAILED = 412,    PAYLOAD_TOO_LARGE = 413,    URI_TOO_LONG = 414,    UNSUPPORTED_MEDIA_TYPE = 415,    REQUESTED_RANGE_NOT_SATISFIABLE = 416,    EXPECTATION_FAILED = 417,    I_AM_A_TEAPOT = 418,    DESTINATION_LOCKED = 421,    UNPROCESSABLE_ENTITY = 422,    LOCKED = 423,    FAILED_DEPENDENCY = 424,    UPGRADE_REQUIRED = 426,    PRECONDITION_REQUIRED = 428,    TOO_MANY_REQUESTS = 429,    REQUEST_HEADER_FIELDS_TOO_LARGE = 431,    UNAVAILABLE_FOR_LEGAL_REASONS = 451,    INTERNAL_SERVER_ERROR = 500,    NOT_IMPLEMENTED = 501,    BAD_GATEWAY = 502,    SERVICE_UNAVAILABLE = 503,    GATEWAY_TIMEOUT = 504,    HTTP_VERSION_NOT_SUPPORTED = 505,    VARIANT_ALSO_NEGOTIATES = 506,    INSUFFICIENT_STORAGE = 507,    LOOP_DETECTED = 508,    NOT_EXTENDED = 510,    NETWORK_AUTHENTICATION_REQUIRED = 511}export enum StreamEventType {    CLOSE = "close",    DRAIN = "drain",    ERROR = "error",    FINISH = "finish",    PIPE = "pipe",    UNPIPE = "unpipe"}export enum CommonChar {    EMPTY = "",    WHITE_SPACE = " ",    COMMA = ",",    NEW_LINE = "\n"}export class CommonRegExp {    static readonly NEW_LINE: RegExp;}export class ErrorUtil {    static errorToException(error: AsteriaError): AsteriaException;    static resolveHttpCode(code: AsteriaErrorCode): number;}export enum PrimitiveType {    STRING = "string",    NUMBER = "number",    ARRAY = "array",    OBJECT = "object"}export interface AsteriaSessionConfig {    name: string;}export interface StreamProcessConfig {    [key: string]: any;}export interface AsteriaContext {    getName(): string;    getId(): string;    getProcessor(): StreamProcessor;}export interface AsteriaSession {    getContext(): AsteriaContext;}export interface AsteriaStream extends AsteriaObject {    init(config: StreamProcessConfig, context: AsteriaContext): void;}export interface AsteriaFilter {    operators: Array<FilterOperator | FilterOperatorNotation | string>;    apply(obj: any, property: string, value: any): boolean;}export enum FilterCondition {    AND = "AND",    OR = "OR"}export interface FilterDefinition {    property: string;    operator: FilterOperator;    value: any;}export enum FilterOperator {    EQUAL = "EQUAL",    NOT_EQUAL = "NOT_EQUAL",    LIKE = "LIKE",    NOT_LIKE = "NOT_LIKE",    STARTS_WITH = "STARTS_WITH",    ENDS_WITH = "ENDS_WITH",    GREATER_THAN = "GREATER_THAN",    LOWER_THAN = "LOWER_THAN"}export enum FilterOperatorNotation {    EQUAL = "=",    NOT_EQUAL = "!=",    GREATER_THAN = ">",    LOWER_THAN = "<"}export interface StreamProcess extends AsteriaObject {    getConfig(): StreamProcessConfig;    setConfig(config: StreamProcessConfig): void;    getType(): StreamProcessType;    create(context: AsteriaContext): AsteriaStream;}export interface StreamProcessor {    add(process: StreamProcess): StreamProcessor;    remove(process: StreamProcess): StreamProcessor;    run(): AsteriaStream;}export enum StreamProcessType {    READABLE = 0,    TRANSFORM = 1,    WRITABLE = 2}export interface AsteriaLogger {    getLogLevel(): AsteriaLogLevel;    setLogLevel(level: AsteriaLogLevel): void;    log(level: AsteriaLogLevel, message: string): void;    debug(message: string): void;    info(message: string): void;    warn(message: string): void;    error(message: string): void;    fatal(message: string): void;}export enum AsteriaLogLevel {    DEBUG = 0,    INFO = 1,    WARN = 2,    ERROR = 3,    FATAL = 4}export interface StreamProcessBuilder {    build(processClass: any, config?: StreamProcessConfig): StreamProcess;}}