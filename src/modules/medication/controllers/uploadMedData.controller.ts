import { jsonResponse } from '../../../shared/utils/AppSuccess';
import { Request, Response, NextFunction } from 'express';
import { CreateMedService } from '../services';

class MedData {
  async upload(req: Request, res: Response, next: NextFunction) {
    const { name, weight, code, drone_id } = req.body;

    const file: any = req.files;

    const response = await new CreateMedService().execute({
      image: file.image,
      name,
      weight,
      code,
      drone_id,
    });

    const successResponse = jsonResponse.build(201, 'Medication data uploaded successfully', response);

    next(successResponse);
  }
}

export default new MedData();
