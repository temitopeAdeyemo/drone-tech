"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const celebrate_1 = require("celebrate");
exports.default = (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.BODY]: celebrate_1.Joi.object().keys({
        name: celebrate_1.Joi.string(),
        weight: celebrate_1.Joi.string(),
        code: celebrate_1.Joi.string(),
        image: celebrate_1.Joi.string(),
    }),
});
