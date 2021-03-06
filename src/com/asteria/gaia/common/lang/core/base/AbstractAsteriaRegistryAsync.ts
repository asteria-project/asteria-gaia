import { AbstractAsteriaObject } from './AbstractAsteriaObject';
import { AsteriaRegistryAsync } from '../AsteriaRegistryAsync';
import { AsteriaException } from '../../exception/AsteriaException';

/**
 * The abstract class for all <code>AsteriaRegistryAsync</code> implementations.
 */
export abstract class AbstractAsteriaRegistryAsync<T> extends AbstractAsteriaObject implements AsteriaRegistryAsync<T> {

    /**
     * The map used to store all items.
     */
    protected readonly MAP: Map<string, T> = null;

    /**
     * Create a new <code>AbstractAsteriaRegistryAsync</code> instance.
     * 
     * @param {string} classRef the reference to the parent class name.
     * @param {boolean} createMap a boolean value that indicates whether to use an internal map (<code>true</code>),
     *                            or not (<code>false</code>).
     */
    protected constructor(classRef: string, createMap: boolean = true) {
        super(classRef);
        if (createMap) {
            this.MAP = new Map<string, T>();
        }
    }

    /**
     * @inheritdoc
     */
    public abstract add(item: T, callback: (err: AsteriaException)=> void): void;
    
    /**
     * @inheritdoc
     */
    public abstract remove(item: T, callback: (err: AsteriaException)=> void): void;

    /**
     * @inheritdoc
     */
    public removeId(id: string, callback: (err: AsteriaException)=> void): void {
        this.MAP.delete(id);
        callback(null);
    }

    /**
     * @inheritdoc
     */
    public get(id: string, callback: (err: AsteriaException, item: T)=> void): void {
        callback(null, this.MAP.get(id));
    }

    /**
     * @inheritdoc
     */
    public has(id: string, callback: (err: AsteriaException, exists: boolean)=> void): void {
        callback(null, this.MAP.has(id));
    }

    /**
     * @inheritdoc
     */
    public getAll(callback: (err: AsteriaException, items: Array<T>)=> void): void {
        callback(null, Array.from(this.MAP.values()));
    }

    /**
     * @inheritdoc
     */
    public getIds(callback: (err: AsteriaException, items: Array<string>)=> void): void {
        callback(null, Array.from(this.MAP.keys()));
    }
}