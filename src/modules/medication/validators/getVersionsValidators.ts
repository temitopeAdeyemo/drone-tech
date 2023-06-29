import { celebrate, Joi, Segments } from 'celebrate';

export default celebrate({
  [Segments['QUERY']]: Joi['object']()['keys']({
    application_name: Joi['string'](),
    package_name: Joi['string'](), //starts with com.
    build_number: Joi['string'](),
    version_no: Joi['string'](),
    id: Joi['string'](),
    latest: Joi['string'](),
  }),
});
