"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FsHelper_1 = __importDefault(require("../../shared/Helpers/FsHelper"));
const path_1 = __importDefault(require("path"));
class BaseService {
    constructor() {
        this.medicationFolder = path_1.default.join(__dirname, '../public/uploads/medication_files/');
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
