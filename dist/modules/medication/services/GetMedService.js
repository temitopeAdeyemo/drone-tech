"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../../../shared/base");
class GetMedService extends base_1.MedicationBaseService {
    async execute(searchFilter, executeFor) {
        //     switch (executeFor) {
        //       case 'get_many':
        //         return await this.fetchVersions({ searchFilter, filterOptions });
        //       case 'get_one':
        //         return await this.fetchVersion(searchFilter);
        //     }
        return {};
    }
}
exports.default = GetMedService;
