"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DroneRepository_1 = __importDefault(require("../../modules/drone/models/repositories/DroneRepository"));
const BaseService_1 = __importDefault(require("./BaseService"));
const AppError_1 = __importDefault(require("../../shared/utils/AppError"));
class DroneBaseService extends BaseService_1.default {
    constructor() {
        super(...arguments);
        this.droneRepository = new DroneRepository_1.default();
    }
    async throwErrIfExists(data, value) {
        let filter = {};
        filter[data] = value;
        const droneExists = await this.droneRepository.getOne(filter);
        if (droneExists)
            throw new AppError_1.default('Drone Exists', 400);
        return;
    }
    async uploadDroneData(data) {
        await this.droneRepository.create(data);
    }
    async getBatteryLevel(data) {
        const datas = await this.droneRepository.retrieveBatteryLevel(data);
        return datas;
    }
    populateDroneModel(data) {
        // const models = ['Lightweight', 'Middleweight', 'Cruiserweight', 'Heavyweight'];
        const modelData = {
            '100': 'Lightweight',
            '200': 'Middleweight',
            '300': 'Cruiserweight',
            '400': 'Heavyweight',
        };
        for (const key in modelData) {
            if (parseInt(data.weight) < parseInt(key)) {
                data.model = modelData[key];
                return data;
            }
        }
        data.model = 'Heavyweight';
        return data;
    }
}
exports.default = DroneBaseService;
