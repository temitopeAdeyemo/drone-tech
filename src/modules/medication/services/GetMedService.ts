import { MedicationBaseService, IBaseService } from '../../../shared/base';
import IGetMedicationFilterDTO from '../dtos/IGetMedicationFilterDTO';
import IMedicationDTO from '../dtos/IMedicationDTO';

type execFor = 'get_many' | 'get_one';

class GetMedService extends MedicationBaseService implements IBaseService {
  async execute(
    searchFilter: IGetMedicationFilterDTO,
    executeFor?: execFor
  ): Promise<IMedicationDTO | IMedicationDTO[] | null> {
    switch (executeFor) {
      case 'get_many':
        return await this.medicationRepository.findAll(searchFilter);
      case 'get_one':
        return await this.medicationRepository.findOne(searchFilter);
    }
    return null;
  }
}

export default GetMedService;
