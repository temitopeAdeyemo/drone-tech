import { jsonResponse } from '../../../shared/utils/AppSuccess';
import { Request, Response, NextFunction } from 'express';
import { GetDroneService } from '../services';
import IGetDroneFilterDTO from '../dtos/IGetDroneFilterDTO';

class GetDrone {
  async fetch(req: Request<{}, {}, {}, IGetDroneFilterDTO | any>, res: Response, next: NextFunction) {
    const { serial_number, model, weight, battery_capacity, state, id } = req.query;

    const response = await new GetDroneService().execute(
      {
        serial_number,
        model,
        weight,
        battery_capacity,
        state,
        id
      },
      "unidle_one"
    );

    const successResponse = jsonResponse.build(201, 'Loaded drone data fetched successfully.', response);

    next(successResponse);
  }
}

export default new GetDrone();
