import { celebrate, Joi, Segments } from 'celebrate';

export default celebrate({
  [Segments['QUERY']]: Joi['object']()['keys']({
    application_name: Joi['string']()['required'](),
    package_name: Joi['string']()['required'](), //starts with com.
    build_number: Joi['string']()['required'](),
    version_no: Joi['string']()['required'](),
  }),
});
