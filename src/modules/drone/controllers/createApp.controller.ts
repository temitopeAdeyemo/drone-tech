import { jsonResponse } from '../../../shared/utils/AppSuccess';
import { Request, Response, NextFunction } from 'express';
import { CreateApplicationService } from '../services';

class CreateApp {
  async upload(req: Request, res: Response, next: NextFunction) {
    const {
      application_name,
      package_name,
      build_number,
      platform,
      file_extension,
      compatible_model_names,
      program_file_name,
      program_file_version,
      description,
      version_name,
      version_no,
    } = req.body;

    const files: any = req.files;

    const response = await new CreateApplicationService().execute(
      {
        application_name,
        icon: files.icon,
        platform,
        program_file_name,
        program_file_version,
        description,
        package_name,
      },
      {
        application_file: files.application_file,
        version_name,
        version_no,
        package_name,
        screenshots: files.screenshots,
        build_number,
        file_extension,
        compatible_model_names,
        description,
      }
    );

    const successResponse = jsonResponse.build(201, 'Application created successfully.', response);

    next(successResponse);
  }
}

export default new CreateApp();
