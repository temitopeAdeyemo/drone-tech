"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../../../shared/base");
const Logger_1 = require("../../../../src/shared/utils/Logger");
const chalk_1 = __importDefault(require("chalk"));
class BatteryManagerService extends base_1.DroneBaseService {
    async execute() {
        const drones = await this.droneRepository.getAll({});
        for (let drone of drones) {
            drone = drone.toJSON();
            if (drone.charging && parseInt(drone.battery_capacity) >= 100)
                drone.charging = false;
            if (!drone.charging && parseInt(drone.battery_capacity) <= 10)
                drone.charging = true;
            if (drone.charging)
                drone.battery_capacity = (parseInt(drone.battery_capacity) + 5).toString();
            else
                drone.battery_capacity = (parseInt(drone.battery_capacity) - 5).toString();
            await this.droneRepository.update(drone, { id: drone.id });
            Logger_1.systemLogs.info(drone);
        }
        console.log(`${chalk_1.default.green.bold('...')} ${chalk_1.default.yellow.bold('...')} ${chalk_1.default.yellow.blue('...')}`);
        return;
    }
}
exports.default = BatteryManagerService;
