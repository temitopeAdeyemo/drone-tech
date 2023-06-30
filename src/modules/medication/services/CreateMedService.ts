import { DroneBaseService, IBaseService } from '../../../shared/base';
import IMedicationDTO from '../dtos/IMedicationDTO';
import MedicationRepository from '../models/repositories/MedicationRepository';
class CreateMedService extends DroneBaseService implements IBaseService {
  async execute(data: IMedicationDTO): Promise<void> {
    const med = new MedicationRepository();
    const medication = await med.create(data);

    return;
  }
}

export default CreateMedService;
