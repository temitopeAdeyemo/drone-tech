"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = require("../services");
class BatteryManager {
    async upload(req, res, next) {
        console.log("GOT HERE!!!!!!!!!");
        const response = await new services_1.batteryManagerService().execute().catch((err) => {
            console.log(5555, err);
        });
        return response;
    }
}
exports.default = new BatteryManager();
