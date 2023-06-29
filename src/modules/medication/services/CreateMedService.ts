import { DroneBaseService, IBaseService } from '../../../shared/base';
import IMedicationDTO from '../dtos/IMedicationDTO';

class CreateMedService extends DroneBaseService implements IBaseService {
  async execute(data: IMedicationDTO): Promise<object> {
    return {};
  }
}

export default CreateMedService;
