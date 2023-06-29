import { db } from '../../../../shared/database/base';
import IGetDroneFilterDTO from '@modules/drone/dtos/IGetDroneFilterDTO';
import IDroneDTO from '../../dtos/IDroneDTO';
import { DroneCreationArrtibutes } from '../entities/Drone';

class DronenRepository {
  private ormRepository: typeof db.Drone;

  async findAll(data: IGetDroneFilterDTO) {
    this.ormRepository.findAll({
      where: { ...data },
    });
  }

  async create(data: DroneCreationArrtibutes) {
    this.ormRepository.create({ ...data });
  }

  async update(updateData: IGetDroneFilterDTO, data: IDroneDTO) {
    this.ormRepository.update(data, { where: { ...updateData } });
  }
}

export default DronenRepository;
