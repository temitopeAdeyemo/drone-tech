"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AppSuccess_1 = require("../../../shared/utils/AppSuccess");
const services_1 = require("../services");
class GetMedication {
    async fetch(req, res, next) {
        const { name, weight, code, image } = req.query;
        const response = await new services_1.GetMedService().execute({
            name,
            weight,
            code,
            image,
        }, "get_one");
        const successResponse = AppSuccess_1.jsonResponse.build(200, 'Medications data fetched successfully.', response);
        next(successResponse);
    }
}
exports.default = new GetMedication();
