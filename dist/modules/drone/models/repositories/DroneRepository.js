"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../../../../shared/database/base");
const Drone_1 = __importDefault(require("../entities/Drone"));
class DronenRepository {
    constructor() {
        this.ormRepository = Drone_1.default;
    }
    async getAll(data) {
        return await this.ormRepository.findAll({
            where: { ...data },
        });
    }
    async retrieveBatteryLevel(data) {
        return await this.ormRepository.findAll({
            where: { ...data },
            attributes: ['serial_number', 'battery_level'],
        });
    }
    async getOne(data) {
        return await this.ormRepository.findOne({
            where: { ...data },
        });
    }
    async create(data) {
        return await base_1.db.Drone.create({ ...data });
    }
    async getDronesByData(data) {
        return await this.ormRepository.findAll({
            where: { ...data },
        });
    }
    async update(updateData, data) {
        await base_1.db.Drone.update(data, { where: { ...updateData } });
    }
}
exports.default = DronenRepository;
