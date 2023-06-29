import { celebrate, Joi, Segments } from 'celebrate';

export default celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    weight: Joi.string().pattern(/^(?:[0-4]?[0-9]{1,2}|500)$/),
    code: Joi.string().pattern(/^[A-Z][A-Z_\-]*[A-Z]$/),
    image: Joi.string().required(),
  }),
});
