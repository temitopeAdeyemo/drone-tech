import { db } from '../../../../shared/database/base';
import IGetDroneFilterDTO from '@modules/drone/dtos/IGetDroneFilterDTO';
import IDroneDTO from '../../dtos/IDroneDTO';
import Drone, { DroneCreationArrtibutes } from '../entities/Drone';
import Medication from '../../../../modules/medication/models/entities/Medication';
import { Sequelize } from 'sequelize';

class DronenRepository {
  private ormRepository = Drone;

  async getAll(data: IGetDroneFilterDTO) {
    return await this.ormRepository.findAll({
      where: { ...data },
      include: [
        {
          model: Medication,
          as: 'Medications',
        },
      ],
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

  async update(updateData: IGetDroneFilterDTO, data: IGetDroneFilterDTO) {
    return await db.Drone.update(data, { where: { ...updateData } });
  }

  async updateMedIds(medId: string, condition: IGetDroneFilterDTO) {
    return await db.Drone.update(
      { library: Sequelize.fn('array_append', Sequelize.col('library'), medId) },
      { where: { ...condition } }
    );
  }
}

export default DronenRepository;
