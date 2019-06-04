import { AbstractAsteriaObject } from './AbstractAsteriaObject';
import { AsteriaRegistry } from '../AsteriaRegistry';
import { Subscribable, Observable, of } from 'rxjs';

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
    public abstract add(item: T): Subscribable<T>;
    
    /**
     * @inheritdoc
     */
    public abstract remove(item: T): Subscribable<T>;

    /**
     * @inheritdoc
     */
    public get(id: string): Observable<T> {
        return of(this.MAP.get(id));
    }

    /**
     * @inheritdoc
     */
    public has(id: string): Observable<boolean> {
        return of(this.MAP.has(id));
    }

    /**
     * @inheritdoc
     */
    public getAll(): Observable<Array<T>> {
        return of(Array.from(this.MAP.values()));
    }

    /**
     * @inheritdoc
     */
    public getIds(): Observable<Array<string>> {
        return of(Array.from(this.MAP.keys()));
    }
}