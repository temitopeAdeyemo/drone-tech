import { jsonResponse } from '../../../shared/utils/AppSuccess';
import { Request, Response, NextFunction } from 'express';
import { GetMedService } from '../services';
import IGetMedicationFilterDTO from '../dtos/IGetMedicationFilterDTO';

class GetMedication {
  async fetch(req: Request<{}, {}, {}, IGetMedicationFilterDTO | any>, res: Response, next: NextFunction) {
    const { name, weight, code, image } = req.query;

    const response = await new GetMedService().execute(
      {
        name,
        weight,
        code,
        image,
        
      },
      'get_many'
    );

    const successResponse = jsonResponse.build(200, 'Medication data fetched successfully.', response);

    next(successResponse);
  }
}

export default new GetMedication();
