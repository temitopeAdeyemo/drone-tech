import { Request, Response, NextFunction } from 'express';
import { batteryManagerService } from '../services';

class BatteryManager {
  async upload(req: Request, res: Response, next: NextFunction) {
    const response = await new batteryManagerService().execute().catch((err: any) => {
      console.log(err);
    });

    return response;
  }
}

export default new BatteryManager();
