import AppError from '../../../shared/utils/AppError';
import { DroneBaseService, IBaseService } from '../../../shared/base';
import IDroneDTO from '../dtos/IDroneDTO';
import DronenRepository from '../models/repositories/DroneRepository';

class BatteryManagerService extends DroneBaseService implements IBaseService {
  async execute(): Promise<object[]> {
    const drones = await this.droneRepository.getAll({});

    console.log(333,drones)

    const updatedData = [];

    for (let drone of drones) {
      if (drone.charging && drone.battery_capacity >= '100') {
        drone.charging = false;
        continue;
      }

      if (!drone.charging && drone.battery_capacity <= '10') {
        drone.charging = true;
      }

      if (drone.charging) {
        drone.battery_capacity = (parseInt(drone.battery_capacity) + 5).toString();
      } else {
        drone.battery_capacity = (parseInt(drone.battery_capacity) - 5).toString();
      }

      updatedData.push(drone);
    }

    const droneDatas = await this.droneRepository.updateMany(updatedData);

    return droneDatas;
  }
}

export default BatteryManagerService;
