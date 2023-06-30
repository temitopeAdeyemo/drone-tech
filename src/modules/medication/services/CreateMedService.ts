import { IBaseService, MedicationBaseService } from '../../../shared/base';
import IMedicationDTO from '../dtos/IMedicationDTO';
class CreateMedService extends MedicationBaseService implements IBaseService {
  async execute(data: IMedicationDTO): Promise<void> {
    const drone = await this.errIfNotDrone(data.drone_id);
    console.log(drone)
    const sumWeight = this.errIfWeightOverload(drone.toJSON(), data.weight);

    const updateData = { state: 'LOADED', load_weight: sumWeight };

    await this.errIfBatteryLow(drone.battery_capacity);

    await this.createMedDirIfNotExist(data.name);

    data.image = await this.uploadFile(data.image, data.name);

    await this.updateDroneData;

    this.updateDroneData(data.drone_id, updateData);

    await this.medicationRepository.create(data);

    return;
  }
}

export default CreateMedService;
