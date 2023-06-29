import { jsonResponse } from '../../../shared/utils/AppSuccess';
import { Request, Response, NextFunction } from 'express';
import { CreateVersionService } from '../services';

class CreateApp {
  async upload(req: Request, res: Response, next: NextFunction) {
    const {
      package_name,
      build_number,
      file_extension,
      version_no,
      compatible_model_names,
      version_name,
      description,
    } = req.body;

    const files: any = req.files;

    const response = await new CreateVersionService().execute({
      application_file: files.application_file,
      package_name,
      screenshots: files.screenshots,
      build_number,
      version_no,
      file_extension,
      compatible_model_names,
      version_name,
      description,
    });

    const successResponse = jsonResponse.build(201, 'Version created successfully', response);

    next(successResponse);
  }
}

export default new CreateApp();
