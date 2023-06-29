import { celebrate, Joi, Segments } from 'celebrate';
const allowedStates = ['IDLE', 'LOADING', 'LOADED', 'DELIVERING', 'DELIVERED', 'RETURNING'];
const allowedModel = ['Lightweight', 'Middleweight', 'Cruiserweight', 'Heavyweight'];

export default celebrate({
  [Segments.QUERY]: Joi.object().keys({
    battery_capacity: Joi.string().pattern(/^(?:[0-9]|[1-9][0-9]|100)$/),

    state: Joi.string().valid(...allowedStates),

    serial_number: Joi.string()
      .min(10, 'utf8')
      .max(100, 'utf8')
      .pattern(/^[0-9]+$/),

    model: Joi.string().valid(...allowedModel),

    weight: Joi.string()
      .max(500, 'utf8')
      .pattern(/^[0-9]+$/),
  }),
});
