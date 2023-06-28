import { jsonResponse } from '../../../shared/utils/AppSuccess';
import { Request, Response, NextFunction } from 'express';
import { DownloadAppService } from '../services';
import { IGetAppQueryDTO } from '../dtos/IGetAppFilterDTO';

class DownloadApp {
  async upload(req: Request<{}, {}, {}, IGetAppQueryDTO>, res: Response, next: NextFunction) {
    const { package_name, platform } = req.query;

    const response = await new DownloadAppService().execute({
      package_name,
      platform,
    });

    const successResponse = jsonResponse.build(201, 'Application downloaded successfully', response);

    next(successResponse);
  }
}

export default new DownloadApp();
