"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIdleDrone = exports.getBatteryLevel = exports.getDroneData = exports.getDronesData = exports.createApp = void 0;
const uploadDrone_controller_1 = __importDefault(require("./uploadDrone.controller"));
exports.createApp = uploadDrone_controller_1.default;
const getDronesData_controller_1 = __importDefault(require("./getDronesData.controller"));
exports.getDronesData = getDronesData_controller_1.default;
const getDroneData_controller_1 = __importDefault(require("./getDroneData.controller"));
exports.getDroneData = getDroneData_controller_1.default;
const getBatteryLevel_controller_1 = __importDefault(require("./getBatteryLevel.controller"));
exports.getBatteryLevel = getBatteryLevel_controller_1.default;
const getIdleDrone_controller_1 = __importDefault(require("./getIdleDrone.controller"));
exports.getIdleDrone = getIdleDrone_controller_1.default;
