import { celebrate, Joi, Segments } from 'celebrate';

export default celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string(),
    weight: Joi.string().pattern(/^[a-zA-Z0-9_-]+$/), //starts with com.
    code: Joi.string().pattern(/^[A-Z][A-Z_\-]*[A-Z]$/),
    image: Joi.string(),
  }),
});
