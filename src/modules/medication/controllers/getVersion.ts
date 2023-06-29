import { jsonResponse } from '../../../shared/utils/AppSuccess';
import { Request, Response, NextFunction } from 'express';
import { GetAppService } from '../services';
import { IGetVersionQueryDTO } from '../dtos/IGetMedicationFilterDTO';

class GetVersions {
  async upload(req: Request<{}, {}, {}, IGetVersionQueryDTO | any>, res: Response, next: NextFunction) {
    const { package_name, build_number, version_no, id, application_name } = req.query;

    const response = await new GetAppService().execute(
      {
        application_name,
        package_name,
        build_number,
        version_no,
        id,
      },
      'get_one'
    );

    const successResponse = jsonResponse.build(201, 'Version fetched successfully', response);

    next(successResponse);
  }
}

export default new GetVersions();
