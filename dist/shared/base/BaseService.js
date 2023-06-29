"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils");
const uuid = __importStar(require("uuid"));
const FsHelper_1 = __importDefault(require("../../shared/Helpers/FsHelper"));
const path_1 = __importDefault(require("path"));
class BaseService {
    constructor() {
        this.applicationFolder = path_1.default.join(__dirname, '../public/uploads/application_files/');
        /**
         * This property returns a generated otp
         */
        this.generateOTP = (0, utils_1.generateOTP)();
        /**
         * This property returns a generated uuid number
         */
        this.uuid = uuid.v4();
        /**
         * This property creates a user when called.
         */
        this.generatedOtp = this.generateOTP;
    }
    async createDirIfNotExist(packageName) {
        await FsHelper_1.default.createDirIfNotExist_(`${this.applicationFolder}/${packageName}`);
    }
    async createVersDirIfNotExist(packageName, appVersion) {
        await FsHelper_1.default.createDirIfNotExist_(`${this.applicationFolder}/${packageName}`);
        await FsHelper_1.default.createDirIfNotExist_(`${this.applicationFolder}/${packageName}/${appVersion}`);
    }
    removeFolder(path) {
        return FsHelper_1.default.removeFolder(path);
    }
}
exports.default = BaseService;
