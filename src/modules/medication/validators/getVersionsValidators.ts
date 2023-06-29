import { celebrate, Joi, Segments } from 'celebrate';

export default celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string(),
    weight: Joi.string(), //starts with com.
    code: Joi.string(),
    image: Joi.string(),
  }),
});
