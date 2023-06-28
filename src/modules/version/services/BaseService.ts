import path from 'path';
import BaseService from '../../../shared/base/BaseService';
import dbRepoHelper from '../../../shared/Helpers/DbRepoHelper';
import ICreateVersionDTO from '../dtos/ICreateVersionDTO';
import fileSys from '../../../shared/Helpers/FsHelper';
import IGetVersionFilterDTO, { IGetVersionData } from '../dtos/IGetVersionFilterDTO';
import IApplicationDTO from '../dtos/IVersionDTO';
import AppError from '@shared/utils/AppError';
import IVersionDTO from '../dtos/IVersionDTO';
import DbRepoHelper from '../../../shared/Helpers/DbRepoHelper';

export type IBaseResponse = null | void | object;

export interface IBaseService {
  execute: (args: any, args2?: any) => Promise<IBaseResponse>;
}

export default abstract class VersionBaseService extends BaseService {
  protected versionData: ICreateVersionDTO;

  protected readonly applicationFolder = path.join(__dirname, '../../../../public/uploads/application_files');

  protected async throwPackageNameExists(packageName: string): Promise<void> {
    return dbRepoHelper.throwPackageExists_(packageName);
  }

  protected saveAppDetails(data: ICreateVersionDTO) {
    return dbRepoHelper.createVersion_(data);
  }

  protected throwDuplicatePackageName(packageName: string,) {
    return dbRepoHelper.throwDuplicatePackageOrBuild_({ package_name: packageName, });
  }

  protected throwDuplicateBuildNum(buildNumber: string, packageName: string) {
    return dbRepoHelper.throwDuplicatePackageOrBuild_({ build_number: buildNumber, package_name: packageName });
  }

  protected throwDuplicateVersion(packageName: string, version: string) {
    return dbRepoHelper.throwDuplicateVersionNo_(packageName, version);
  }

  protected throwVersionExist(appName: string, version: string) {
    return dbRepoHelper.throwVersionExist_(appName, version);
  }

  protected throwAppNotFound(packageName: string) {
    return dbRepoHelper.throwAppNotFound({ package_name: packageName });
  }

  protected fetchVersions(data: IGetVersionData): Promise<IGetVersionFilterDTO[]> {
    return dbRepoHelper.getVersionsByVersionData(data);
  }

  protected fetchVersion(data: IGetVersionFilterDTO): Promise<IGetVersionFilterDTO | null> {
    return dbRepoHelper.getVersionByVersionData(data);
  }

  protected throwVersionNotFound(appName: string, versionNo: string) {
    return dbRepoHelper.throwVersionNotFound_(appName, versionNo);
  }

  protected throwNotActive(appName: string) {
    return dbRepoHelper.throwAppNotActive_(appName);
  }

  protected checkDirExists(packageName: string) {
    return fileSys.dirExists_(`${this.applicationFolder}/${packageName}`);
  }

  protected async unsetLatest(packageName: string) {
    return await dbRepoHelper.unsetLatest_(packageName);
  }

  setVersionData(data: ICreateVersionDTO) {
    this.versionData = data;
    return;
  }

  setScreenshotUrl(screenshotsUrl: string) {
    this.versionData.screenshots = screenshotsUrl;
    return;
  }

  setFileUrl(fileUrl: string) {
    this.versionData.file_url = fileUrl;
    return;
  }

  setMd5Encoding() {
    this.versionData.md5_encoding = this.versionData.application_file.md5;
    return;
  }

  setFileExtension() {
    const splittedFileName = this.versionData.application_file.name.split('.');
    const lastIndex = splittedFileName.length - 1;
    this.versionData.file_extension = splittedFileName[lastIndex];
    return;
  }

  async throwDuplicateFileUpload(file_name: string, packageName: string) {
    await fileSys.throwFileExists(`${this.applicationFolder}/${packageName}/file/${file_name.replace(/\s+/g, '-')}`);
    return;
  }

  async updateAppLtVersion(packageName: string, version: string) {
    await dbRepoHelper.updateAppData({ package_name: packageName }, { latest_version: version });
  }

  protected async uploadFile(file: any, packageName: string, versionNo: string, type: 'file' | 'screenshots' | 'icon') {
    const uploadFile = fileSys.uploadFile_(file, `${this.applicationFolder}/${packageName}/${versionNo}/${type}`);
    return uploadFile;
  }

  protected async updateDownloadCount(versionData: IVersionDTO) {
    const downloadCountNum = parseInt(versionData.download_no) + 1;

    await DbRepoHelper.updateVersionData(versionData, { download_no: downloadCountNum.toString() });

    return;
  }
}
