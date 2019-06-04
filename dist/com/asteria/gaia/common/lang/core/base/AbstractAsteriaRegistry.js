"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractAsteriaObject_1 = require("./AbstractAsteriaObject");
const rxjs_1 = require("rxjs");
class AbstractAsteriaRegistry extends AbstractAsteriaObject_1.AbstractAsteriaObject {
    constructor(classRef, createMap = true) {
        super(classRef);
        this.MAP = null;
        if (createMap) {
            this.MAP = new Map();
        }
    }
    get(id) {
        return rxjs_1.of(this.MAP.get(id));
    }
    has(id) {
        return rxjs_1.of(this.MAP.has(id));
    }
    getAll() {
        return rxjs_1.of(Array.from(this.MAP.values()));
    }
    getIds() {
        return rxjs_1.of(Array.from(this.MAP.keys()));
    }
}
exports.AbstractAsteriaRegistry = AbstractAsteriaRegistry;
