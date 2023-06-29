import { jsonResponse } from '../../../shared/utils/AppSuccess';
import { Request, Response, NextFunction } from 'express';
import { GetAppService } from '../services';
import { IGetAppQueryDTO } from '../dtos/IGetDroneFilterDTO';

class GetApp {
  async get(req: Request<{}, {}, {}, IGetAppQueryDTO | any>, res: Response, next: NextFunction) {
    const { application_name } = req.query;
    // const { platform } = req.headers;

    const platform = req.headers['platform'] as string;
    console.log('THIS IS SUPPOSED PLATFORM', platform);

    const response = await new GetAppService().execute(
      {
        application_name,
        platform,
      },
      'get_one'
    );

    const successResponse = jsonResponse.build(201, 'Application fetched successfully', response);

    next(successResponse);
  }
}

export default new GetApp();
