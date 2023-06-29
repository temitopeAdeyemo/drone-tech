import AppError from '../../../shared/utils/AppError';
import { DroneBaseService, IBaseService } from '../../../shared/base';
import IDroneDTO from '../dtos/IDroneDTO';
import DronenRepository from '../models/repositories/DroneRepository';

class UploadDroneService extends DroneBaseService implements IBaseService {
  async execute(droneData: IDroneDTO): Promise<void> {
    await this.throwErrIfExists('serial_number', droneData.serial_number);

    await this.uploadDroneData(droneData);
    
    return;
  }
}

export default UploadDroneService;
