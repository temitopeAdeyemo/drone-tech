"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AppSuccess_1 = require("../../../shared/utils/AppSuccess");
const services_1 = require("../services");
class CreateApp {
    async upload(req, res, next) {
        const { serial_number, model, weight, battery_capacity, state } = req.body;
        const response = await new services_1.UploadDroneService().execute({
            serial_number,
            model,
            weight,
            battery_capacity,
            state,
        });
        const successResponse = AppSuccess_1.jsonResponse.build(201, 'Drone data uploaded successfully.', response);
        next(successResponse);
    }
}
exports.default = new CreateApp();
