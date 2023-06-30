import fileSys from '../../shared/Helpers/FsHelper';
import DronenRepository from '../../modules/drone/models/repositories/DroneRepository';
import IDroneDTO from '../../modules/drone/dtos/IDroneDTO';
import BaseService from './BaseService';
import AppError from '../../shared/utils/AppError';
import IGetDroneFilterDTO from '../../modules/drone/dtos/IGetDroneFilterDTO';

export type IBaseResponse = null | void | object;

export interface IBaseService {
  execute: (args: any, args2?: any) => Promise<IBaseResponse>;
}

export default abstract class DroneBaseService extends BaseService {
  // protected droneRepository = new DronenRepository();

  protected async throwErrIfExists(data: 'serial_number', value: string) {
    let filter: IGetDroneFilterDTO = {};
    filter[data] = value;

    const droneExists = await this.droneRepository.getOne(filter);
    if (droneExists) throw new AppError('Drone Exists', 400);

    return;
  }

  protected async uploadDroneData(data: IDroneDTO) {
    await this.droneRepository.create(data);
  }

  protected async getBatteryLevel(data: IGetDroneFilterDTO) {
    const datas = await this.droneRepository.retrieveBatteryLevel(data);
    return datas;
  }

  protected populateDroneModel(data: IDroneDTO) {
    // const models = ['Lightweight', 'Middleweight', 'Cruiserweight', 'Heavyweight'];
    const modelData: any = {
      '100': 'Lightweight',
      '200': 'Middleweight',
      '300': 'Cruiserweight',
      '400': 'Heavyweight',
    };

    for (const key in modelData) {
      if (parseInt(data.weight) < parseInt(key)) {
        data.model = modelData[key];
        return data;
      }
    }

    data.model = 'Heavyweight';
    return data;
  }
}
