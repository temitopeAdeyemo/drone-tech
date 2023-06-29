// import AppError from '../utils/AppError';
// import ApplicationRepository from '../../modules/application/models/repositories/ApplicationRepository';
// import ICreateAppDTO from '../../modules/application/dtos/ICreateAppDTO';
// import IApplicationDTO from '../../modules/application/dtos/IApplicationDTO';
// import { getVersionFilterType } from '../../modules/version/models/repositories/VersionRepository';
// import IGetAppFilterDTO, { IGetAppData } from '../../modules/application/dtos/IGetAppFilterDTO';
// import VersionRepository from '../../modules/version/models/repositories/VersionRepository';
// import ICreateVersionDTO from '../../modules/version/dtos/ICreateVersionDTO';
// import IVersionDTO from '../../modules/version/dtos/IVersionDTO';
// import IGetVersionFilterDTO, { IGetVersionData } from '../../modules/version/dtos/IGetVersionFilterDTO';

// export type CredentialTypes = 'email' | 'phone_number';

// class DbRepoHelper {
//   protected readonly applicationRepository = new ApplicationRepository();
//   protected readonly versionRepository = new VersionRepository();

//   async throwPackageExists_(packageName: string) {
//     const application = await this.versionRepository.findByPackageName(packageName);
//     if (application) throw new AppError(`Package name taken.`, 401);

//     return;
//   }

//   async createApplication_(data: ICreateAppDTO) {
//     await this.applicationRepository.create(data);

//     return;
//   }

//   async createVersion_(data: ICreateVersionDTO) {
//     await this.versionRepository.create(data);

//     return;
//   }

//   async throwDuplicatePackageOrBuild_(data: IGetVersionFilterDTO) {
//     const application = await this.getVersionByVersionData(data);
//     if (application)
//       throw new AppError('Application with ' + Object.keys(data)[0] + ' exists, Please deploy another version.');

//     return;
//   }

//   async getAppByPackageName_(packageName: string): Promise<IApplicationDTO | null> {
//     return await this.applicationRepository.findOneByPackageName(packageName);
//   }

//   async getByVersionNo_(versionNo: string, packageName: string): Promise<IVersionDTO | null> {
//     return await this.versionRepository.findOneByVersionData({ version_no: versionNo, package_name: packageName });
//   }

//   async throwDuplicateVersionNo_(packageName: string, versionNo: string) {
//     const version = await this.getByVersionNo_(versionNo, packageName);
//     if (version) throw new AppError('Version exists, Please deploy a new version.');

//     return;
//   }

//   async throwAppNotFound(data: IGetAppFilterDTO): Promise<IApplicationDTO> {
//     const application = await this.getAppByAppData(data);
//     if (!application) throw new AppError('Application not found.', 401);
//     return application;
//   }

//   async getAppJoinLtVersion(packageName: string, platform?: string): Promise<IApplicationDTO> {
//     const app = await this.applicationRepository.getAppPopLtVersion(packageName);

//     if (!app || (platform && app.platform != platform)) throw new AppError('Application not found.', 401);

//     return app;
//   }

//   async getAppJoinVersions(data: IGetAppFilterDTO): Promise<IApplicationDTO> {
//     const app = await this.applicationRepository.getAppPopVersions(data);

//     if (!app || (data.platform && app.platform != data.platform)) throw new AppError('Application not found.', 401);

//     return app;
//   }

//   async getAppByAppData(data: IGetAppFilterDTO): Promise<IApplicationDTO | null> {
//     const app = await this.applicationRepository.findOneByAppData(data);
//     if (!app) throw new AppError('Application not found.');
//     return app;
//   }

//   async getVersionByVersionData(data: IGetVersionFilterDTO): Promise<IVersionDTO | null> {
//     const app = await this.versionRepository.findOneByVersionData(data);

//     return app;
//   }

//   async getAppsByAppData(data: IGetAppData) {
//     return await this.applicationRepository.findAll({
//       searchFilter: data.searchFilter,
//       filterOptions: data.filterOptions,
//     });
//   }

//   async getVersionsByVersionData(data: IGetVersionData): Promise<IVersionDTO[]> {
//     return await this.versionRepository.findAll({
//       searchFilter: data.searchFilter,
//       filterOptions: data.filterOptions,
//     });
//   }

//   async throwNotActive_(application: IApplicationDTO) {
//     if (!application.status) throw new AppError('This application is not available for download.', 401);

//     return;
//   }

//   async throwVersionExist_(packageName: string, versionNo: string) {
//     const application = await this.getAppByPackageName_(packageName);

//     if (!application) throw new AppError('Application not found.', 401);

//     return;
//   }

//   async throwVersionNotFound_(appName: string, version: string) {
//     const versionData = await this.getVersionByVersionData({ application_name: appName, version_no: version });

//     if (!versionData) throw new AppError('Application not found.', 401);

//     return versionData;
//   }

//   async throwDuplicatePackageName_(packageName: string) {
//     const application = await this.applicationRepository.findByPackageName(packageName);
//     if (application) throw new AppError(`Package name taken.`, 401);

//     return;
//   }

//   async throwAppNotActive_(appName: string) {
//     const app = await this.getAppByAppData({ application_name: appName, status: 'ACTIVE' });
//     if (!app) throw new AppError('Application not found or not available.', 401);
//     return app;
//   }

//   async unsetLatest_(packageName: string) {
//     const app = await this.versionRepository.findActive(packageName);

//     if (app) {
//       app.latest = false;
//       await this.versionRepository.save(app);
//     }

//     return;
//   }

//   async updateVersionData(versionData: IVersionDTO, updateData: IGetVersionFilterDTO) {
//     versionData = { ...versionData, ...updateData };
//     await this.versionRepository.save(versionData);
//   }

//   async updateAppData(searchFilter: IGetAppFilterDTO, updateData: IGetAppFilterDTO) {
//     return await this.applicationRepository.updateVersionData(searchFilter, updateData);
//   }

//   async deleteAppByData(data: IGetAppFilterDTO) {
//     return await this.applicationRepository.deleteAppByData(data);
//   }
// }

// export default new DbRepoHelper();
