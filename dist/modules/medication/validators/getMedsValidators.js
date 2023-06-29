"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const celebrate_1 = require("celebrate");
exports.default = (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.QUERY]: celebrate_1.Joi.object().keys({
        application_name: celebrate_1.Joi.string(),
        package_name: celebrate_1.Joi.string().required(),
        build_number: celebrate_1.Joi.string(),
        version_no: celebrate_1.Joi.string(),
        id: celebrate_1.Joi.string(),
        latest: celebrate_1.Joi.string(),
    }),
});
