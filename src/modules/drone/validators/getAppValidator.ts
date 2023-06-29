import { celebrate, Joi, Segments } from 'celebrate';

export default celebrate({
  [Segments.QUERY]: Joi.object().keys({
    application_name: Joi.string().required(),
    package_name: Joi.string(), //starts with com.
    build_number: Joi.string(),
    model_name: Joi.string(),
    id: Joi.string(),
  }),
  [Segments.HEADERS]: Joi.object()
    .keys({
      platform: Joi.string().required(),
    })
    .options({ allowUnknown: true }),
});
