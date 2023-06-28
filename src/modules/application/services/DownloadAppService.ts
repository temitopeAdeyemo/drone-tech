import IDownloadDTO from '../dtos/IDownloadDTO';
import IGetAppFilterDTO, { IGetAppData } from '../dtos/IGetAppFilterDTO';
import ApplicationBaseService, { IBaseService } from './BaseService';

type getApp = IGetAppFilterDTO | IGetAppFilterDTO[] | null;

class GetLatestAppService extends ApplicationBaseService implements IBaseService {
  async execute(data: IDownloadDTO): Promise<object> {
    const application = await this.getAppJoinLtVersion(data.package_name, data.platform);

    this.throwNotActive(application);

    return { package_name: data.application_name };
  }
}

export default GetLatestAppService;
