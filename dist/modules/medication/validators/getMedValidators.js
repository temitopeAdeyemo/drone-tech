"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const celebrate_1 = require("celebrate");
exports.default = (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.BODY]: celebrate_1.Joi.object().keys({
        name: celebrate_1.Joi.string(),
        weight: celebrate_1.Joi.string().pattern(/^[a-zA-Z0-9_-]+$/),
        code: celebrate_1.Joi.string().pattern(/^[A-Z][A-Z_\-]*[A-Z]$/),
        image: celebrate_1.Joi.string(),
    }),
});
