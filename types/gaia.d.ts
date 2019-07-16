/*!
 * Asteria Gaia Node Module
 * Copyright(c) 2019 Pascal ECHEMANN
 * MIT Licensed
 * This is a part of the Asteria Project: <https://github.com/asteria-project>
 */

declare module "asteria-gaia" {

export interface AsteriaLine {    index: number;    value: string;}export interface AsteriaObject {    getClassName(): string;}export interface AsteriaRegistry<T> extends AsteriaObject {    add(item: T): void;    remove(item: T): void;    has(id: string): boolean;    get(id: string): T;    getAll(): Array<T>;    getIds(): Array<string>;}export interface AsteriaRegistryAsync<T> extends AsteriaObject {    add(item: T, callback: (err: AsteriaException) => void): void;    remove(item: T, callback: (err: AsteriaException) => void): void;    has(id: string, callback: (err: AsteriaException, exists: boolean) => void): void;    get(id: string, callback: (err: AsteriaException, item: T) => void): void;    getAll(callback: (err: AsteriaException, items: Array<T>) => void): void;    getIds(callback: (err: AsteriaException, items: Array<string>) => void): void;}export abstract class AbstractAsteriaObject implements AsteriaObject {    private readonly _className;    constructor(className: string);    getClassName(): string;}export abstract class AbstractAsteriaRegistry<T> extends AbstractAsteriaObject implements AsteriaRegistry<T> {    protected readonly MAP: Map<string, T>;    protected constructor(classRef: string, createMap?: boolean);    abstract add(item: T): void;    abstract remove(item: T): void;    get(id: string): T;    has(id: string): boolean;    getAll(): Array<T>;    getIds(): Array<string>;}export abstract class AbstractAsteriaRegistryAsync<T> extends AbstractAsteriaObject implements AsteriaRegistryAsync<T> {    protected readonly MAP: Map<string, T>;    protected constructor(classRef: string, createMap?: boolean);    abstract add(item: T, callback: (err: AsteriaException) => void): void;    abstract remove(item: T, callback: (err: AsteriaException) => void): void;    get(id: string, callback: (err: AsteriaException, item: T) => void): void;    has(id: string, callback: (err: AsteriaException, exists: boolean) => void): void;    getAll(callback: (err: AsteriaException, items: Array<T>) => void): void;    getIds(callback: (err: AsteriaException, items: Array<string>) => void): void;}export class AsteriaError extends AbstractAsteriaObject {    constructor(code: AsteriaErrorCode, className: string, message: string, stack?: string);    readonly code: AsteriaErrorCode;    readonly message: string;    readonly className: string;    readonly stack: string;    toString(): string;}export enum AsteriaErrorCode {    PROCESS_FAILURE = 100,    INITIALIZATION_FAILURE = 101,    INVALID_CONFIG = 200,    MISSING_PARAMETER = 201,    INVALID_PARAMETER = 202,    MISSING_SESSION_CONFIG = 203,    MISSING_SESSION_NAME = 204,    INVALID_SESSION_NAME = 205,    MISSING_FILTER = 206,    INVALID_FILTER = 207,    MISSING_ASQL_QUERY = 300,    INVALID_ASQL_QUERY = 301,    INVALID_ASQL_OPERAND = 302,    INVALID_ASQL_CONDITION = 303,    FILE_READ_ERROR = 400,    FILE_WRITE_ERROR = 401}export class AsteriaException extends Error {    constructor(code: AsteriaErrorCode, message: string, stack?: string);    readonly code: AsteriaErrorCode;    toString(): string;}export enum StreamEventType {    CLOSE = "close",    DRAIN = "drain",    DATA = "data",    ERROR = "error",    FINISH = "finish",    PIPE = "pipe",    UNPIPE = "unpipe"}export enum CommonChar {    EMPTY = "",    WHITE_SPACE = " ",    NEW_LINE = "\n",    DOT = ".",    COMMA = ",",    SLASH = "/",    COLON = ":",    SEMICOLON = ";"}export class CommonRegExp {    static readonly NEW_LINE: RegExp;}export class ErrorUtil {    static errorToException(error: AsteriaError): AsteriaException;    static resolveHttpCode(code: AsteriaErrorCode): number;}export enum PrimitiveType {    STRING = "string",    NUMBER = "number",    ARRAY = "array",    OBJECT = "object"}export interface AsteriaSessionConfig {    name: string;}export interface StreamProcessConfig {    [key: string]: any;}export interface AsteriaContext {    getName(): string;    getId(): string;    getProcessor(): StreamProcessor;}export interface AsteriaSession {    getContext(): AsteriaContext;}export interface AsteriaStream extends AsteriaObject {    init(config: StreamProcessConfig, context: AsteriaContext): void;}export interface AsteriaFilter {    operators: Array<FilterOperator | FilterOperatorNotation | string>;    apply(obj: any, property: string, value: any): boolean;}export enum FilterCondition {    AND = "AND",    OR = "OR"}export interface FilterDefinition {    property: string;    operator: FilterOperator;    value: any;}export enum FilterOperator {    EQUAL = "EQUAL",    NOT_EQUAL = "NOT_EQUAL",    LIKE = "LIKE",    NOT_LIKE = "NOT_LIKE",    STARTS_WITH = "STARTS_WITH",    ENDS_WITH = "ENDS_WITH",    GREATER_THAN = "GREATER_THAN",    LOWER_THAN = "LOWER_THAN"}export enum FilterOperatorNotation {    EQUAL = "=",    NOT_EQUAL = "!=",    GREATER_THAN = ">",    LOWER_THAN = "<"}export interface StreamProcess extends AsteriaObject {    getConfig(): StreamProcessConfig;    setConfig(config: StreamProcessConfig): void;    getType(): StreamProcessType;    create(context: AsteriaContext): AsteriaStream;}export interface StreamProcessor {    add(process: StreamProcess): StreamProcessor;    remove(process: StreamProcess): StreamProcessor;    run(): AsteriaStream;}export enum StreamProcessType {    READABLE = 0,    TRANSFORM = 1,    WRITABLE = 2}export interface AsteriaLogger {    getLogLevel(): AsteriaLogLevel;    setLogLevel(level: AsteriaLogLevel): void;    log(level: AsteriaLogLevel, message: string): void;    debug(message: string): void;    info(message: string): void;    warn(message: string): void;    error(message: string): void;    fatal(message: string): void;}export enum AsteriaLogLevel {    DEBUG = 0,    INFO = 1,    WARN = 2,    ERROR = 3,    FATAL = 4}export interface StreamProcessBuilder {    build(processClass: any, config?: StreamProcessConfig): StreamProcess;}}