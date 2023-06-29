"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../../../shared/base");
class GetDroneService extends base_1.DroneBaseService {
    async execute(searchFilter, executeFor) {
        searchFilter = this.removeUndefinedKeys(searchFilter);
        switch (executeFor) {
            case 'get_all':
                return await this.droneRepository.getAll(searchFilter);
            case 'get_one':
                return await this.droneRepository.getOne(searchFilter);
            case 'battery_level':
                return await this.getBatteryLevel(searchFilter);
            case 'idle_drones':
                return await this.droneRepository.getDronesByData(searchFilter);
        }
        return null;
    }
}
exports.default = GetDroneService;
