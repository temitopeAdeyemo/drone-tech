"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseService_1 = __importDefault(require("./BaseService"));
const MedicationRepository_1 = __importDefault(require("../../modules/medication/models/repositories/MedicationRepository"));
class MedicationBaseService extends BaseService_1.default {
    constructor() {
        super(...arguments);
        this.medicationRepository = new MedicationRepository_1.default();
    }
}
exports.default = MedicationBaseService;
