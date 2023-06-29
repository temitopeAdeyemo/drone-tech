import { jsonResponse } from '../../../shared/utils/AppSuccess';
import { Request, Response, NextFunction } from 'express';
import { GetDroneService } from '../services';
import IGetDroneFilterDTO from '../dtos/IGetDroneFilterDTO';

class GetDrone {
  async fetch(req: Request<{}, {}, {}, IGetDroneFilterDTO | any>, res: Response, next: NextFunction) {
    const { serial_number, model, weight, battery_capacity, state } = req.query;

    const response = await new GetDroneService().execute(
      {
        serial_number,
        model,
        weight,
        battery_capacity,
        state,
      },
      "idle_drones"
    );

    const successResponse = jsonResponse.build(201, 'Idle drones data fetched successfully.', response);

    next(successResponse);
  }
}

export default new GetDrone();
