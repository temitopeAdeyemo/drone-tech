"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../../../shared/base");
class GetMedService extends base_1.MedicationBaseService {
    async execute(searchFilter, executeFor) {
        let response;
        switch (executeFor) {
            case 'get_many':
                response = await this.medicationRepository.findAll(searchFilter);
            case 'get_one':
                response = await this.medicationRepository.findOne(searchFilter);
        }
        return response || null;
    }
}
exports.default = GetMedService;
