import { jsonResponse } from '../../../shared/utils/AppSuccess';
import { Request, Response, NextFunction } from 'express';
import { GetAppService } from '../services';
import { IGetAppsQueryDTO } from '../dtos/IGetAppFilterDTO';

class GetApp {
  async upload(req: Request<{}, {}, {}, IGetAppsQueryDTO>, res: Response, next: NextFunction) {
    const { application_name, id, page, limit } = req.query;
    // const { platform } = req.headers;

    const platform = req.headers['platform'] as string;
    console.log('THIS IS SUPPOSED PLATFORM', platform);

    const response = await new GetAppService().execute(
      {
        application_name,
        platform,
        id,
      },
      'get_many',
      {
        page,
        limit,
      }
    );

    const successResponse = jsonResponse.build(201, 'Applications fetched successfully.', response);

    next(successResponse);
  }
}

export default new GetApp();
