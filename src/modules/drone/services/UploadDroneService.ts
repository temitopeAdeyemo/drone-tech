import { DroneBaseService, IBaseService } from '../../../shared/base';
import IDroneDTO from '../dtos/IDroneDTO';

class UploadDroneService extends DroneBaseService implements IBaseService {
  async execute(appData: IDroneDTO): Promise<object> {
    return {};
  }
}

export default UploadDroneService;
