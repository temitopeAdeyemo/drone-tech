"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const index_1 = __importDefault(require("../index"));
const Drone_1 = __importDefault(require("../../../modules/drone/models/entities/Drone"));
const Medication_1 = __importDefault(require("../../../modules/medication/models/entities/Medication"));
const sequelize = index_1.default.getInstance();
// init models
Drone_1.default.initModel(sequelize);
Medication_1.default.initModel(sequelize);
// associate models
Drone_1.default.associateModel();
Medication_1.default.associateModel();
exports.db = {
    sequelize,
    Drone: Drone_1.default,
    Medication: Medication_1.default,
};
