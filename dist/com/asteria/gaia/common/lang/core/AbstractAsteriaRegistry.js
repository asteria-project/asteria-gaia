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
    get(id, callback) {
        callback(null, this.MAP.get(id));
    }
    has(id, callback) {
        callback(null, this.MAP.has(id));
    }
    getAll(callback) {
        callback(null, Array.from(this.MAP.values()));
    }
    getIds(callback) {
        callback(null, Array.from(this.MAP.keys()));
    }
}
exports.AbstractAsteriaRegistry = AbstractAsteriaRegistry;
