"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractAsteriaRegistry_1 = require("../../../src/com/asteria/gaia/common/lang/core/base/AbstractAsteriaRegistry");
class AsteriaRegistryImpl extends AbstractAsteriaRegistry_1.AbstractAsteriaRegistry {
    constructor(className, createMap = true) {
        super(className, createMap);
    }
    add(item) {
        this.MAP.set(String(item), item);
    }
    remove(item) {
        this.MAP.delete(String(item));
    }
    getMap() {
        return this.MAP;
    }
}
exports.AsteriaRegistryImpl = AsteriaRegistryImpl;
