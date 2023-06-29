import IDownloadDTO from '../dtos/IDownloadDTO';
import IGetAppFilterDTO from '../dtos/IGetMedicationFilterDTO';
import VersionBaseService, { IBaseService } from './BaseService';

type getApp = IGetAppFilterDTO | IGetAppFilterDTO[] | null;

class GetApplicationService extends VersionBaseService implements IBaseService {
  async execute(data: IDownloadDTO): Promise<{ fileUrl: string }> {
    const versionData = await this.throwVersionNotFound(data.application_name, data.version_no);

    await this.throwNotActive(data.application_name);

    await this.throwVersionNotFound(data.application_name, data.version_no);

    await this.updateDownloadCount(versionData);

    return { fileUrl: versionData.file_url };
  }
}

export default GetApplicationService;
