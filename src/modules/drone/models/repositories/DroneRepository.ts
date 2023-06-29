import { db } from '../../../../shared/database/base';
import IGetDroneFilterDTO from '@modules/drone/dtos/IGetDroneFilterDTO';
import IDroneDTO from '../../dtos/IDroneDTO';
import Drone, { DroneCreationArrtibutes } from '../entities/Drone';

class DronenRepository {
  private ormRepository = Drone;

  async getAll(data: IGetDroneFilterDTO) {
    return await this.ormRepository.findAll({
      where: { ...data },
    });
  }

  async retrieveBatteryLevel(data: IGetDroneFilterDTO) {
    return await this.ormRepository.findAll({
      where: { ...data },
      attributes: ['serial_number', 'battery_level'],
    });
  }

  async getOne(data: IGetDroneFilterDTO) {
    return await this.ormRepository.findOne({
      where: { ...data },
    });
  }

  async create(data: DroneCreationArrtibutes) {
    return await db.Drone.create({ ...data });
  }

  async getDronesByData(data: IGetDroneFilterDTO) {
    return await this.ormRepository.findAll({
      where: { ...data },
    });
  }

  async update(updateData: IGetDroneFilterDTO, data: IDroneDTO) {
    await db.Drone.update(data, { where: { ...updateData } });
  }
}

export default DronenRepository;
