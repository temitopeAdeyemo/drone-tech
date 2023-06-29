"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../../../shared/base");
class UploadDroneService extends base_1.DroneBaseService {
    async execute(droneData) {
        await this.throwErrIfExists('serial_number', droneData.serial_number);
        await this.uploadDroneData(droneData);
        return;
    }
}
exports.default = UploadDroneService;
