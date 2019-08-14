"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractAsteriaRegistryAsync_1 = require("../../../src/com/asteria/gaia/common/lang/core/base/AbstractAsteriaRegistryAsync");
class AsteriaRegistryAsyncImpl extends AbstractAsteriaRegistryAsync_1.AbstractAsteriaRegistryAsync {
    constructor(className, createMap = true) {
        super(className, createMap);
    }
    add(item, callback) {
        this.MAP.set(String(item), item);
        callback(null);
    }
    remove(item, callback) {
        this.MAP.delete(String(item));
        callback(null);
    }
    getMap() {
        return this.MAP;
    }
}
exports.AsteriaRegistryAsyncImpl = AsteriaRegistryAsyncImpl;
