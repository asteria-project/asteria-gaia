import { AbstractAsteriaObject } from './AbstractAsteriaObject';
import { AsteriaRegistry } from '../AsteriaRegistry';

/**
 * The abstract class for all <code>AsteriaRegistry</code> implementations.
 */
export abstract class AbstractAsteriaRegistry<T> extends AbstractAsteriaObject implements AsteriaRegistry<T> {

    /**
     * The map used to store all items.
     */
    protected readonly MAP: Map<string, T> = null;

    /**
     * Create a new <code>AbstractRegistry</code> instance.
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
    public abstract add(item: T): void;
    
    /**
     * @inheritdoc
     */
    public abstract remove(item: T): void;

    /**
     * @inheritdoc
     */
    public removeId(id: string): void {
        this.MAP.delete(id);
    }

    /**
     * @inheritdoc
     */
    public get(id: string): T {
        return this.MAP.get(id);
    }

    /**
     * @inheritdoc
     */
    public has(id: string): boolean {
        return this.MAP.has(id);
    }

    /**
     * @inheritdoc
     */
    public getAll(): Array<T> {
        return Array.from(this.MAP.values());
    }

    /**
     * @inheritdoc
     */
    public getIds(): Array<string> {
        return Array.from(this.MAP.keys());
    }
}