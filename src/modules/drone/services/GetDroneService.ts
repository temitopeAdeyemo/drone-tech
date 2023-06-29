import IGetDroneFilterDTO from '../dtos/IGetDroneFilterDTO';
import { DroneBaseService, IBaseService } from '../../../shared/base';

type execFor = 'get_many' | 'get_one';

class GetDroneService extends DroneBaseService implements IBaseService {
  async execute(searchFilter: IGetDroneFilterDTO, executeFor?: execFor): Promise<object> {
    // switch (executeFor) {
    //   case 'get_many':
    //     return await this.fetchApplications({ searchFilter, filterOptions });
    //   case 'get_one':
    //     return await this.fetchApplication(searchFilter);
    // }
    return {};
  }
}

export default GetDroneService;
