"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.batteryManagerService = exports.GetDroneService = exports.UploadDroneService = void 0;
const UploadDroneService_1 = __importDefault(require("./UploadDroneService"));
exports.UploadDroneService = UploadDroneService_1.default;
const GetDroneService_1 = __importDefault(require("./GetDroneService"));
exports.GetDroneService = GetDroneService_1.default;
const batteryManagerService_1 = __importDefault(require("./batteryManagerService"));
exports.batteryManagerService = batteryManagerService_1.default;
