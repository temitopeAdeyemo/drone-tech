"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../../../shared/base");
class CreateMedService extends base_1.MedicationBaseService {
    async execute(data) {
        const drone = await this.errIfNotDrone(data.drone_id);
        console.log(drone);
        const sumWeight = this.errIfWeightOverload(drone.toJSON(), data.weight);
        const updateData = { state: 'LOADED', load_weight: sumWeight };
        await this.errIfBatteryLow(drone.battery_capacity);
        await this.createMedDirIfNotExist(data.name);
        data.image = await this.uploadFile(data.image, data.name);
        await this.updateDroneData;
        this.updateDroneData(data.drone_id, updateData);
        await this.medicationRepository.create(data);
        return;
    }
}
exports.default = CreateMedService;
