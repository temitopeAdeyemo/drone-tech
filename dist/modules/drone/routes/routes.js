"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const validators_1 = require("../validators");
const router = (0, express_1.Router)();
router.post('/', validators_1.droneDataValidator, controllers_1.createApp.upload.bind(controllers_1.createApp));
// router.get('/', getDroneValidator, getApplication.get);
// router.get('/all', getApplications.upload.bind(getApplications));
exports.default = router;
