"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../../../shared/base");
class UploadDroneService extends base_1.DroneBaseService {
    async execute() {
        const drones = await this.droneRepository.getAll({});
        const updatedData = [];
        for (let drone of drones) {
            if (drone.charging && drone.battery_capacity >= '100') {
                drone.charging = false;
                continue;
            }
            if (!drone.charging && drone.battery_capacity <= '10') {
                drone.charging = true;
            }
            if (drone.charging) {
                drone.battery_capacity = (parseInt(drone.battery_capacity) + 5).toString();
            }
            else {
                drone.battery_capacity = (parseInt(drone.battery_capacity) - 5).toString();
            }
            updatedData.push(drone);
        }
        const droneDatas = await this.droneRepository.updateMany(updatedData);
        return droneDatas;
    }
}
exports.default = UploadDroneService;
