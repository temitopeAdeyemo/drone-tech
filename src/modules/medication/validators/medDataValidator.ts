import { celebrate, Joi, Segments } from 'celebrate';

export default celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    weight: Joi.string().required(), //starts with com.
    code: Joi.string().required(),
    image: Joi.string().required(),
  }),
});
