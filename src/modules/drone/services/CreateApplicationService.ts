import ICreateVersionDTO from '../../medication/dtos/ICreateVersionDTO';
import ICreateAppDTO from '../dtos/ICreateDroneDTO';
import ApplicationBaseService, { IBaseService } from './BaseService';

class CreateApplicationService extends ApplicationBaseService implements IBaseService {
  async execute(appData: ICreateAppDTO, versionData: ICreateVersionDTO): Promise<object> {
    await this.throwDuplicatePackageName(appData.application_name);

    await this.createDirIfNotExist(`${appData.package_name}`);

    await this.createVersDirIfNotExist(`${appData.package_name}`, `${versionData.version_no}`);

    const iconUrl = await this.uploadAppIcon(appData.icon, appData.package_name, versionData.version_no, 'icon');

    appData.icon = iconUrl;

    // resave icon to proper path

    // add screenshot to app data
    appData.latest_version = versionData.version_no;

    await this.saveAppDetails(appData);

    const path = await this.createVersionService.execute(versionData).catch((err: any) => {
      this.handleVersionCreateFailErr(err, appData.package_name, appData.platform);
    });

    return { ...path };
  }
}

export default CreateApplicationService;
