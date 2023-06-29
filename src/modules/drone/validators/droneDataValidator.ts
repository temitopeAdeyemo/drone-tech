import { celebrate, Joi, Segments } from 'celebrate';

export default celebrate({
  [Segments.BODY]: Joi.object().keys({
    serial_number: Joi.string().required(),
    model: Joi.string().required(), //starts with com.
    weight: Joi.string().required(),
    battery_capacity: Joi.string().required(),
    state: Joi.string().required(),
  }),
});
