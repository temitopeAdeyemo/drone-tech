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
            case 'unidle_one':
                return await this.droneRepository.getWorkingDrone(searchFilter);
            case 'unidle_all':
                return await this.droneRepository.getWorkingDrones(searchFilter);
        }
        return null;
    }
}
exports.default = GetDroneService;
