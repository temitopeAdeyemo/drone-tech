import { jsonResponse } from '../../../shared/utils/AppSuccess';
import { Request, Response, NextFunction } from 'express';
import { GetAppService } from '../services';
import { IGetVersionsQueryDTO } from '../dtos/IGetVersionFilterDTO';

class GetVersion {
  async upload(req: Request<{}, {}, {}, IGetVersionsQueryDTO | any>, res: Response, next: NextFunction) {
    const { package_name, build_number, version_no, id, page, limit, application_name, latest } = req.query;

    const response = await new GetAppService().execute(
      {
        application_name,
        package_name,
        build_number,
        id,
        version_no,
        latest,
      },
      'get_many',
      {
        page,
        limit,
      }
    );

    const successResponse = jsonResponse.build(200, 'Versions fetched successfully.', response);

    next(successResponse);
  }
}

export default new GetVersion();
