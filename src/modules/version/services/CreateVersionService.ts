import ICreateVersionDTO from '../dtos/ICreateVersionDTO';
import VersionBaseService, { IBaseService } from './BaseService';

class CreateVersionService extends VersionBaseService implements IBaseService {
  async execute(data: ICreateVersionDTO): Promise<object> {
    const application = await this.throwAppNotFound(data.package_name);

    await this.throwDuplicateVersion(data.package_name, data.version_no);

    await this.createVersDirIfNotExist(`${data.package_name}`, `${data.version_no}`);

    // Check against duplicate build number
    await this.throwDuplicateBuildNum(data.build_number, data.package_name);

    //Check against duplicate file upload
    await this.throwDuplicateFileUpload(data.application_file.name, data.package_name);

    // Check if folder exist, folder with the app_name
    await this.checkDirExists(data.package_name);

    // write to server path, Make sure it overwrites existing file...
    const fileUrl = await this.uploadFile(data.application_file, data.package_name, data.version_no, 'file');

    //Upload version screenshots
    const screenshotsUrl = await this.uploadFile(data.screenshots, data.package_name, data.version_no, 'screenshots');

    // set version data
    this.setVersionData(data);

    // data.screenshots = screenshotsUrl;
    this.setScreenshotUrl(screenshotsUrl);

    // set file url
    this.setFileUrl(fileUrl);

    // Update version to latest and prev. latest to latest: false
    await this.unsetLatest(data.package_name);

    // update app latest version here... Do not forget
    await this.updateAppLtVersion(data.package_name, data.version_no);

    this.setMd5Encoding();

    this.setFileExtension();

    //save to db
    await this.saveAppDetails(this.versionData);

    // return url
    return { path: fileUrl };
  }
}

export default CreateVersionService;
