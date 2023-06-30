import IGetDroneFilterDTO from '../dtos/IGetDroneFilterDTO';
import { DroneBaseService, IBaseService } from '../../../shared/base';
import IDroneDTO from '../dtos/IDroneDTO';

type execFor = 'get_all' | 'get_one' | 'battery_level' | 'unidle_all' | 'unidle_one';

class GetDroneService extends DroneBaseService implements IBaseService {
  async execute(searchFilter: IGetDroneFilterDTO, executeFor?: execFor): Promise<IDroneDTO | IDroneDTO[] | null> {
    searchFilter = this.removeUndefinedKeys(searchFilter);

    switch (executeFor) {
      case 'get_all':
        return await this.droneRepository.getAll(searchFilter);

      case 'get_one':
        return await this.droneRepository.getOne(searchFilter);

      case 'battery_level':
        return await this.getBatteryLevel(searchFilter);

      case 'unidle_one':
        return await this.droneRepository.getWorkingDrone(searchFilter);

      case 'unidle_all':
        return await this.droneRepository.getWorkingDrones(searchFilter);
    }
    return null;
  }
}

export default GetDroneService;
