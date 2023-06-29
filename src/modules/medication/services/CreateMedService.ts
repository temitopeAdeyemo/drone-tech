import { DroneBaseService, IBaseService } from '../../../shared/base';
import IMedicationDTO from '../dtos/IMedicationDTO';

class CreateVersionService extends DroneBaseService implements IBaseService {
  async execute(data: IMedicationDTO): Promise<object> {
    return {};
  }
}

export default CreateVersionService;
