"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AppSuccess_1 = require("../../../shared/utils/AppSuccess");
const services_1 = require("../services");
class GetDrone {
    async upload(req, res, next) {
        const { serial_number, model, weight, battery_capacity, state } = req.query;
        const response = await new services_1.GetDroneService().execute({
            serial_number,
            model,
            weight,
            battery_capacity,
            state,
        }, 'get_many');
        const successResponse = AppSuccess_1.jsonResponse.build(201, 'All drones data fetched successfully.', response);
        next(successResponse);
    }
}
exports.default = new GetDrone();
