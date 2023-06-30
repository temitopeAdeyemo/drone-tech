"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = require("../services");
class BatteryManager {
    async upload(req, res, next) {
        const response = await new services_1.batteryManagerService().execute().catch((err) => {
            console.log(err);
        });
        return response;
    }
}
exports.default = new BatteryManager();
