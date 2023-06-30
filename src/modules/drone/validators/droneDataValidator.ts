import { celebrate, Joi, Segments } from 'celebrate';
// const allowedModel = ['Lightweight', 'Middleweight', 'Cruiserweight', 'Heavyweight'];

export default celebrate({
  [Segments.BODY]: Joi.object().keys({
    serial_number: Joi.string()
      .min(10, 'utf8')
      .max(100, 'utf8')
      .pattern(/^[0-9]+$/)
      .message('Serial number can only be string of numbers with 10 - 100 characters')
      .required(),

    weight: Joi.string()
      .pattern(/^(?:[0-4]?[0-9]{1,2}|500)$/)
      .message('Weight can only be string of numbers with with a max of 500')
      .required(),
  }),
});
