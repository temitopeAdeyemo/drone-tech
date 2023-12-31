"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const validators_1 = require("../validators");
const router = (0, express_1.Router)();
router.post('/', validators_1.droneDataValidator, controllers_1.createApp.upload.bind(controllers_1.createApp));
router.get('/', validators_1.getDroneValidator, controllers_1.getDroneData.fetch);
router.get('/all', validators_1.getDroneValidator, controllers_1.getDronesData.fetch);
router.get('/idle-state', validators_1.getDroneValidator, controllers_1.getIdleDrone.fetch);
router.get('/battery-level', validators_1.getDroneValidator, controllers_1.getBatteryLevel.fetch);
router.get('/loaded-one', validators_1.getUnidleDronesValidator, controllers_1.getUnidleDrone.fetch);
router.get('/all-loaded', validators_1.getUnidleDronesValidator, controllers_1.getUnidleDrones.fetch);
exports.default = router;
