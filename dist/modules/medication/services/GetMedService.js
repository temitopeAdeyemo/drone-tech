"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../../../shared/base");
class GetMedService extends base_1.MedicationBaseService {
    async execute(searchFilter, executeFor) {
        switch (executeFor) {
            case 'get_many':
                return await this.medicationRepository.findAll(searchFilter);
            case 'get_one':
                return await this.medicationRepository.findOne(searchFilter);
        }
        return null;
    }
}
exports.default = GetMedService;
