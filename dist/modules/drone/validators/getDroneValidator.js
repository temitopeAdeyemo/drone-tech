"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const celebrate_1 = require("celebrate");
exports.default = (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.QUERY]: celebrate_1.Joi.object().keys({
        serial_number: celebrate_1.Joi.string(),
        model: celebrate_1.Joi.string(),
        weight: celebrate_1.Joi.string(),
        battery_capacity: celebrate_1.Joi.string(),
        state: celebrate_1.Joi.string(),
    }),
});
