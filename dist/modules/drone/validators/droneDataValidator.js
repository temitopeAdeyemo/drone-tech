"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const celebrate_1 = require("celebrate");
// const allowedModel = ['Lightweight', 'Middleweight', 'Cruiserweight', 'Heavyweight'];
exports.default = (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.BODY]: celebrate_1.Joi.object().keys({
        serial_number: celebrate_1.Joi.string()
            .min(10, 'utf8')
            .max(100, 'utf8')
            .pattern(/^[0-9]+$/)
            .message('Serial number can only be string of numbers with 10 - 100 characters')
            .required(),
        weight: celebrate_1.Joi.string()
            .pattern(/^(?:[0-4]?[0-9]{1,2}|500)$/)
            .message('Weight can only be string of numbers with with a max of 500')
            .required(),
    }),
});
