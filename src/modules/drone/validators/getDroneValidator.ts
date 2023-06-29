import { celebrate, Joi, Segments } from 'celebrate';

export default celebrate({
  [Segments.QUERY]: Joi.object().keys({
    serial_number: Joi.string(),
    model: Joi.string(), //starts with com.
    weight: Joi.string(),
    battery_capacity: Joi.string(),
    state: Joi.string(),
  }),
});
