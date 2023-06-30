import { Request, Response, NextFunction } from 'express';
import { batteryManagerService } from '../services';

class BatteryManager {
  async upload(req: Request, res: Response, next: NextFunction) {
    console.log("GOT HERE!!!!!!!!!");
    
    const response = await new batteryManagerService().execute().catch((err: any) => {
      console.log(5555, err);
    });

    return response;
  }
}

export default new BatteryManager();
