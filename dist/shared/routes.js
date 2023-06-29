"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const routes_1 = __importDefault(require("../modules/drone/routes/routes"));
const routes_2 = __importDefault(require("../modules/medication/routes/routes"));
const router = (0, express_1.Router)();
router.use('/medication', routes_2.default);
router.use('/drone', routes_1.default);
exports.default = router;
