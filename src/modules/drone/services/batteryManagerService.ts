import { DroneBaseService, IBaseService } from '../../../shared/base';

class BatteryManagerService extends DroneBaseService implements IBaseService {
  async execute(): Promise<void> {
    const drones = await this.droneRepository.getAll({});

    for (let drone of drones) {
      drone = drone.toJSON();
      if (drone.charging && parseInt(drone.battery_capacity) >= 100) drone.charging = false;

      if (!drone.charging && parseInt(drone.battery_capacity) <= 10) drone.charging = true;

      if (drone.charging) drone.battery_capacity = (parseInt(drone.battery_capacity) + 5).toString();
      else drone.battery_capacity = (parseInt(drone.battery_capacity) - 5).toString();

      await this.droneRepository.update(drone, { id: drone.id });

      console.log(drone);
    }

    return;
  }
}

export default BatteryManagerService;