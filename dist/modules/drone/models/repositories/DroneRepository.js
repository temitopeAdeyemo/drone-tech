"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../../../../shared/database");
const Drone_1 = __importDefault(require("../entities/Drone"));
const Medication_1 = __importDefault(require("../../../../modules/medication/models/entities/Medication"));
const sequelize_1 = require("sequelize");
class DronenRepository {
    constructor() {
        this.ormRepository = Drone_1.default;
    }
    async getAll(data) {
        return await this.ormRepository.findAll({
            where: { ...data },
        });
    }
    async getWorkingDrones(data) {
        return await this.ormRepository.findAll({
            where: { ...{ ...data, state: { [sequelize_1.Op.ne]: 'IDLE' } } },
            include: [
                {
                    model: Medication_1.default,
                    as: 'Medications',
                },
            ],
            attributes: ['id', 'serial_number'],
        });
    }
    async getWorkingDrone(data) {
        return await this.ormRepository.findOne({
            where: { ...{ ...data, state: { [sequelize_1.Op.ne]: 'IDLE' } } },
            include: [
                {
                    model: Medication_1.default,
                    as: 'Medications',
                },
            ],
            attributes: ['id', 'serial_number'],
        });
    }
    async retrieveBatteryLevel(data) {
        return await this.ormRepository.findAll({
            where: { ...data },
            attributes: ['serial_number', 'battery_capacity'],
        });
    }
    async getOne(data) {
        return await this.ormRepository.findOne({
            where: { ...data },
        });
    }
    async create(data) {
        return await database_1.db.Drone.create({ ...data });
    }
    async getDronesByData(data) {
        return await this.ormRepository.findAll({
            where: { ...data },
        });
    }
    async update(data, condition) {
        return await database_1.db.Drone.update(data, { where: { ...condition } });
    }
    async createMany(data) {
        return await database_1.db.Drone.bulkCreate(data, { updateOnDuplicate: ['battery_capacity'] });
    }
}
exports.default = DronenRepository;
