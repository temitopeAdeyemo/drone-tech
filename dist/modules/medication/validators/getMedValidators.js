"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const celebrate_1 = require("celebrate");
exports.default = (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.BODY]: celebrate_1.Joi.object().keys({
        name: celebrate_1.Joi.string(),
        image: celebrate_1.Joi.string(),
        weight: celebrate_1.Joi.string()
            .pattern(/^(?:[0-4]?[0-9]{1,2}|500)$/)
            .message('Weight can only be string of number with max of 500'),
        code: celebrate_1.Joi.string()
            .pattern(/^[A-Z][A-Z_\-]*[A-Z]$/)
            .message('Code can only be upper case letters, underscore and numbers'),
    }),
});
