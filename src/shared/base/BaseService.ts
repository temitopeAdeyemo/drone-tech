import { generateOTP } from '../utils';
import * as uuid from 'uuid';
import fileSys from '../../shared/Helpers/FsHelper';
import path from 'path';
import AppError from '../utils/AppError';
import DronenRepository from '../../modules/drone/models/repositories/DroneRepository';
import IGetDroneFilterDTO from '../../modules/drone/dtos/IGetDroneFilterDTO';
import IDroneDTO from '../../modules/drone/dtos/IDroneDTO';

export type IBaseResponse = null | void | object;

export interface IBaseService {
  execute: (args: any) => Promise<IBaseResponse>;
}

type states = 'IDLE' | 'LOADING' | 'LOADED' | 'DELIVERING' | 'DELIVERED' | 'RETURNING';

export default abstract class BaseService {
  protected droneRepository = new DronenRepository();

  protected readonly medicationFolder = path.join(__dirname, '../public/uploads/medication_files/');

  protected async updateDroneData(droneId: string, updateData: IGetDroneFilterDTO) {
    return await this.droneRepository.update(updateData, { id: parseInt(droneId) });
  }

  protected async errIfNotDrone(id: string) {
    const drone = await this.droneRepository.getOne({ id: parseInt(id) });

    if (!drone) {
      throw new AppError('Drone not found.', 404);
    }

    return drone;
  }

  protected errIfWeightOverload(droneData: IDroneDTO, medWeight: string) {
    const sumWeight = droneData.load_weight
      ? parseInt(droneData.load_weight) + parseInt(medWeight)
      : parseInt(medWeight);
    
    if (parseInt(droneData.weight) < sumWeight) {
      throw new AppError('Drone weight overload.', 401);
    }

    return sumWeight.toString();
  }

  protected removeUndefinedKeys(obj: object) {
    obj = Object.fromEntries(Object.entries(obj).filter(([_, value]) => value !== undefined));
    return obj;
  }
  protected async createVersDirIfNotExist(medName: string): Promise<void> {
    await fileSys.createDirIfNotExist_(`${this.medicationFolder}/${medName}`);
  }

  protected removeFolder(path: string) {
    return fileSys.removeFolder(path);
  }
}
