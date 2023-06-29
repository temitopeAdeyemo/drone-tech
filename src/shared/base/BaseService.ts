import { generateOTP } from '../utils';
import * as uuid from 'uuid';
import fileSys from '../../shared/Helpers/FsHelper';
import path from 'path';
import AppError from '../utils/AppError';
import DronenRepository from '../../modules/drone/models/repositories/DroneRepository';
import IGetDroneFilterDTO from '../../modules/drone/dtos/IGetDroneFilterDTO';
import IDroneDTO from '@modules/drone/dtos/IDroneDTO';

export type IBaseResponse = null | void | object;

export interface IBaseService {
  execute: (args: any) => Promise<IBaseResponse>;
}

export default abstract class BaseService {
  protected readonly medicationFolder = path.join(__dirname, '../public/uploads/medication_files/');

  protected removeUndefinedKeys(obj: object){
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
