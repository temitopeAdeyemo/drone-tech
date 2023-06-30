"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Drone_1 = __importDefault(require("../../../../modules/drone/models/entities/Drone"));
const database_1 = require("../../../../shared/database");
class MedicationRepository {
    constructor() {
        this.ormRepository = database_1.db.Medication;
    }
    async findAll(data) {
        return await this.ormRepository.findAll({
            where: { ...data },
            include: [
                {
                    model: Drone_1.default,
                },
            ],
        });
    }
    async findOne(data) {
        return await this.ormRepository.findOne({
            where: { ...data },
            include: [
                {
                    model: Drone_1.default,
                    as: 'Drone',
                },
            ],
        });
    }
    async create(data) {
        return await this.ormRepository.create({ ...data });
    }
    async update(updateData, data) {
        await this.ormRepository.update(data, { where: { ...updateData } });
    }
}
exports.default = MedicationRepository;
