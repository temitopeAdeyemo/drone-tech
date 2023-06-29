"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const celebrate_1 = require("celebrate");
exports.default = (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.BODY]: celebrate_1.Joi.object().keys({
        name: celebrate_1.Joi.string().required(),
        weight: celebrate_1.Joi.string().required(),
        code: celebrate_1.Joi.string().required(),
        image: celebrate_1.Joi.string().required(),
    }),
});
