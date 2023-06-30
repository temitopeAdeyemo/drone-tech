"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../../../shared/base");
class CreateMedService extends base_1.MedicationBaseService {
    async execute(data) {
        const drone = await this.errIfNotDrone(data.drone_id);
        const sumWeight = this.errIfWeightOverload(drone.toJSON(), data.weight);
        const updateData = { state: "LOADED", load_weight: sumWeight };
        this.updateDroneData(data.drone_id, updateData);
        await this.medicationRepository.create(data);
        return;
    }
}
exports.default = CreateMedService;
