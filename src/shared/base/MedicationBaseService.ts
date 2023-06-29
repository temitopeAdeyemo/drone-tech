import path from 'path';
import fileSys from '../../shared/Helpers/FsHelper';
import DronenRepository from '../../modules/drone/models/repositories/DroneRepository';
import IMedicationDTO from '../../modules/medication/dtos/IMedicationDTO';
import BaseService from './BaseService';
import AppError from '../../shared/utils/AppError';

export type IBaseResponse = null | void | object;

export interface IBaseService {
  execute: (args: any, args2?: any) => Promise<IBaseResponse>;
}

export default abstract class MedicationBaseService extends BaseService {}
