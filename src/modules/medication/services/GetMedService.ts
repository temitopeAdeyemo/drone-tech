import { MedicationBaseService, IBaseService } from '../../../shared/base';
import IMedicationDTO from '../dtos/IMedicationDTO';

type execFor = 'get_many' | 'get_one';

class GetMedService extends MedicationBaseService implements IBaseService {
  async execute(searchFilter: IMedicationDTO, executeFor?: execFor): Promise<object> {
    //     switch (executeFor) {
    //       case 'get_many':
    //         return await this.fetchVersions({ searchFilter, filterOptions });
    //       case 'get_one':
    //         return await this.fetchVersion(searchFilter);
    //     }
    return {};
  }
}

export default GetMedService;
