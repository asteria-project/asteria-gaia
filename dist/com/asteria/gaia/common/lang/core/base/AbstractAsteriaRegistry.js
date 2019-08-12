"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractAsteriaObject_1 = require("./AbstractAsteriaObject");
class AbstractAsteriaRegistry extends AbstractAsteriaObject_1.AbstractAsteriaObject {
    constructor(classRef, createMap = true) {
        super(classRef);
        this.MAP = null;
        if (createMap) {
            this.MAP = new Map();
        }
    }
    removeId(id) {
        this.MAP.delete(id);
    }
    get(id) {
        return this.MAP.get(id);
    }
    has(id) {
        return this.MAP.has(id);
    }
    getAll() {
        return Array.from(this.MAP.values());
    }
    getIds() {
        return Array.from(this.MAP.keys());
    }
}
exports.AbstractAsteriaRegistry = AbstractAsteriaRegistry;
