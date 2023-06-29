import { celebrate, Joi, Segments } from 'celebrate';
const allowedModel = ['Lightweight', 'Middleweight', 'Cruiserweight', 'Heavyweight'];

export default celebrate({
  [Segments.BODY]: Joi.object().keys({
    serial_number: Joi.string()
      .min(10, 'utf8')
      .max(100, 'utf8')
      .pattern(/^[0-9]+$/)
      .required(),

    model: Joi.string()
      .valid(...allowedModel)
      .required(),

    weight: Joi.string()
      .required()
      .pattern(/^(?:[0-4]?[0-9]{1,2}|500)$/),
  }),
});
