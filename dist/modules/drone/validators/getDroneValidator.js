"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const celebrate_1 = require("celebrate");
const allowedStates = ['IDLE', 'LOADING', 'LOADED', 'DELIVERING', 'DELIVERED', 'RETURNING'];
const allowedModel = ['Lightweight', 'Middleweight', 'Cruiserweight', 'Heavyweight'];
exports.default = (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.QUERY]: celebrate_1.Joi.object().keys({
        battery_capacity: celebrate_1.Joi.string().pattern(/^(?:[0-9]|[1-9][0-9]|100)$/),
        state: celebrate_1.Joi.string().valid(...allowedStates),
        serial_number: celebrate_1.Joi.string()
            .min(10, 'utf8')
            .max(100, 'utf8')
            .pattern(/^[0-9]+$/),
        model: celebrate_1.Joi.string().valid(...allowedModel),
        weight: celebrate_1.Joi.string()
            .max(500, 'utf8')
            .pattern(/^[0-9]+$/),
    }),
});
