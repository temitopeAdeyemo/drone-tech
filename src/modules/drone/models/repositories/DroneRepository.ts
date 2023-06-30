import { db } from '../../../../shared/database';
import IGetDroneFilterDTO from '../../dtos/IGetDroneFilterDTO';
import Drone, { DroneCreationArrtibutes } from '../entities/Drone';
import Medication from '../../../../modules/medication/models/entities/Medication';
import { Op } from 'sequelize';
import IDroneDTO from '@modules/drone/dtos/IDroneDTO';

class DronenRepository {
  private ormRepository = Drone;

  async getAll(data: IGetDroneFilterDTO) {
    return await this.ormRepository.findAll({
      where: { ...data },
    });
  }

  async getWorkingDrones(data: IGetDroneFilterDTO) {
    return await this.ormRepository.findAll({
      where: { ...{ ...data, state: { [Op.ne]: 'IDLE' } } },
      include: [
        {
          model: Medication,
          as: 'Medications',
        },
      ],
      attributes: ['id', 'serial_number'],
    });
  }

  async getWorkingDrone(data: IGetDroneFilterDTO) {
    return await this.ormRepository.findOne({
      where: { ...{ ...data, state: { [Op.ne]: 'IDLE' } } },
      include: [
        {
          model: Medication,
          as: 'Medications',
        },
      ],
      attributes: ['id', 'serial_number'],
    });
  }

  async retrieveBatteryLevel(data: IGetDroneFilterDTO) {
    return await this.ormRepository.findAll({
      where: { ...data },
      attributes: ['serial_number', 'battery_capacity'],
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

  async update(data: IGetDroneFilterDTO, condition: IGetDroneFilterDTO) {
    return await db.Drone.update(data, { where: { ...condition } });
  }

  async createMany(data: any[]) {
    return await db.Drone.bulkCreate(data, { updateOnDuplicate: ['battery_capacity'] });
  }
}

export default DronenRepository;
