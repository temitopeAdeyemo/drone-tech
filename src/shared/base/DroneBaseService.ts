// import path from 'path';
// import BaseService from '../../../shared/base/BaseService';
// import dbRepoHelper from '../../../shared/Helpers/DbRepoHelper';
// import ICreateAppDTO from '../dtos/ICreateDroneDTO';
// import fileSys from '../../../shared/Helpers/FsHelper';
// import IGetAppFilterDTO, { IGetAppData } from '../dtos/IGetDroneFilterDTO';
import DronenRepository from '../../modules/drone/models/repositories/DroneRepository';
import IDroneDTO from '../../modules/drone/dtos/IDroneDTO';
import BaseService from './BaseService';
// import CreateVersionService from '../../medication/services/CreateVersionService';
// import AppError from '../../../shared/utils/AppError';


export type IBaseResponse = null | void | object;

export interface IBaseService {
  execute: (args: any, args2?: any) => Promise<IBaseResponse>;
}

export default abstract class DroneBaseService extends BaseService {
//   protected readonly createVersionService = new CreateVersionService();

//   protected readonly applicationFolder = path.join(__dirname, '../../../../public/uploads/application_files');

//   protected saveAppDetails(data: ICreateAppDTO) {
//     return dbRepoHelper.createApplication_(data);
//   }

//   protected throwDuplicatePackageName(packageName: string): Promise<void> {
//     return dbRepoHelper.throwDuplicatePackageName_(packageName);
//   }

//   protected uploadAppIcon(applicationFile: any, appName: string, versionNo: string, type: 'icon') {
//     return fileSys.uploadFile_(applicationFile, `${this.applicationFolder}/${appName}/${versionNo}/${type}`);
//   }

//   protected getApp(data: IGetAppFilterDTO) {
//     return dbRepoHelper.throwAppNotFound(data);
//   }

//   protected getAppJoinLtVersion(packageName: string, platform?: string) {
//     return dbRepoHelper.getAppJoinLtVersion(packageName, platform);
//   }

//   protected fetchApplications(data: IGetAppData): Promise<IGetAppFilterDTO[]> {
//     return dbRepoHelper.getAppsByAppData(data);
//   }

//   protected fetchApplication(data: IGetAppFilterDTO): Promise<IGetAppFilterDTO | null> {
//     return dbRepoHelper.getAppJoinVersions(data);
//   }

//   protected throwNotActive(application: IApplicationDTO) {
//     return dbRepoHelper.throwNotActive_(application);
//   }

//   protected removeFolder(package_name: string) {
//     return fileSys.removeFolder(`${this.applicationFolder}/${package_name}`);
//   }

//   protected deleteApp(packageName: string, platform: string) {
//     return dbRepoHelper.deleteAppByData({ package_name: packageName, platform });
//   }

//   protected handleVersionCreateFailErr(err: any, packageName: string, platform: string) {
//     this.removeFolder(packageName);

//     this.deleteApp(packageName, platform);

//     throw new AppError(err.message, err.statusCode);
//   }
}
