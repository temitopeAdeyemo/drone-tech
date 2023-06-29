"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../../../shared/base");
class GetDroneService extends base_1.DroneBaseService {
    async execute(searchFilter, executeFor) {
        // switch (executeFor) {
        //   case 'get_many':
        //     return await this.fetchApplications({ searchFilter, filterOptions });
        //   case 'get_one':
        //     return await this.fetchApplication(searchFilter);
        // }
        return {};
    }
}
exports.default = GetDroneService;
