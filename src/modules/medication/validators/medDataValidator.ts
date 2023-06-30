import { celebrate, Joi, Segments } from 'celebrate';

export default celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),

    drone_id: Joi.string().required(),

    image: Joi.string().required(),

    weight: Joi.string()
      .pattern(/^(?:[0-4]?[0-9]{1,2}|500)$/)
      .message('Weight can only be string of number with max of 500')
      .required(),
    
    code: Joi.string()
      .pattern(/^[A-Z][A-Z_\-]*[A-Z]$/)
      .message('Code can only be upper case letters, underscore and numbers')
      .required(),
  }),


});
