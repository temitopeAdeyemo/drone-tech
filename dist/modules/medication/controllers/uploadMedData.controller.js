"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AppSuccess_1 = require("../../../shared/utils/AppSuccess");
const services_1 = require("../services");
class MedData {
    async upload(req, res, next) {
        const { name, weight, code } = req.body;
        const files = req.files;
        const response = await new services_1.CreateMedService().execute({
            image: files.image,
            name,
            weight,
            code,
        });
        const successResponse = AppSuccess_1.jsonResponse.build(201, 'Medication data uploaded successfully', response);
        next(successResponse);
    }
}
exports.default = new MedData();
