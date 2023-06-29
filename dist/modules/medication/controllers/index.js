"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMedications = exports.getMedication = exports.uploadMedData = void 0;
const uploadMedData_controller_1 = __importDefault(require("./uploadMedData.controller"));
exports.uploadMedData = uploadMedData_controller_1.default;
const getMedication_1 = __importDefault(require("./getMedication"));
exports.getMedication = getMedication_1.default;
const getMedications_1 = __importDefault(require("./getMedications"));
exports.getMedications = getMedications_1.default;
