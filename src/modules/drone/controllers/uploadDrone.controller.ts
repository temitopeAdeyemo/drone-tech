import { jsonResponse } from '../../../shared/utils/AppSuccess';
import { Request, Response, NextFunction } from 'express';
import { UploadDroneService } from '../services';

class CreateApp {
  async upload(req: Request, res: Response, next: NextFunction) {
    const { serial_number, model, weight, battery_capacity, state } = req.body;

    console.log(req.files, req.file);
    const response = await new UploadDroneService().execute({
      serial_number,
      model,
      weight,
      battery_capacity,
      state,
    });

    const successResponse = jsonResponse.build(201, 'Drone data uploaded successfully.', response);

    next(successResponse);
  }
}

export default new CreateApp();
