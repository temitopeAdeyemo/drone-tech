"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FsHelper_1 = __importDefault(require("../../shared/Helpers/FsHelper"));
const path_1 = __importDefault(require("path"));
const AppError_1 = __importDefault(require("../utils/AppError"));
const DroneRepository_1 = __importDefault(require("../../modules/drone/models/repositories/DroneRepository"));
class BaseService {
    constructor() {
        this.droneRepository = new DroneRepository_1.default();
        this.medicationFolder = path_1.default.join(__dirname, '../public/uploads/medication_files/');
    }
    async updateDroneData(droneId, updateData) {
        return await this.droneRepository.update(updateData, { id: parseInt(droneId) });
    }
    async errIfNotDrone(id) {
        const drone = await this.droneRepository.getOne({ id: parseInt(id) });
        if (!drone) {
            throw new AppError_1.default('Drone not found.', 404);
        }
        return drone;
    }
    errIfWeightOverload(droneData, medWeight) {
        const sumWeight = droneData.load_weight
            ? parseInt(droneData.load_weight) + parseInt(medWeight)
            : parseInt(medWeight);
        if (parseInt(droneData.weight) < sumWeight) {
            throw new AppError_1.default('Drone weight overload.', 401);
        }
        return sumWeight.toString();
    }
    removeUndefinedKeys(obj) {
        obj = Object.fromEntries(Object.entries(obj).filter(([_, value]) => value !== undefined));
        return obj;
    }
    async createVersDirIfNotExist(medName) {
        await FsHelper_1.default.createDirIfNotExist_(`${this.medicationFolder}/${medName}`);
    }
    removeFolder(path) {
        return FsHelper_1.default.removeFolder(path);
    }
}
exports.default = BaseService;
