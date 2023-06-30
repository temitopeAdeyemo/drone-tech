import { MedicationBaseService, IBaseService } from '../../../shared/base';
import IGetMedicationFilterDTO from '../dtos/IGetMedicationFilterDTO';
import IMedicationDTO from '../dtos/IMedicationDTO';
import Medication from '../models/entities/Medication';

type execFor = 'get_many' | 'get_one';

class GetMedService extends MedicationBaseService implements IBaseService {
  async execute(
    searchFilter: IGetMedicationFilterDTO,
    executeFor?: execFor
  ): Promise<IMedicationDTO | IMedicationDTO[] | null> {
    let response;
    switch (executeFor) {
      case 'get_many':
        response = await this.medicationRepository.findAll(searchFilter);
      case 'get_one':
        response = await this.medicationRepository.findOne(searchFilter);
    }

    return response || null;
  }
}

export default GetMedService;
