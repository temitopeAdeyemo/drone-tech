import Drone from '../../../../modules/drone/models/entities/Drone';
import { db } from '../../../../shared/database';
import IGetMedicationFilterDTO from '../../dtos/IGetMedicationFilterDTO';
import IMedicationDTO from '../../dtos/IMedicationDTO';
import { MedicationCreationArrtibutes } from '../entities/Medication';

class MedicationRepository {
  private ormRepository = db.Medication;

  async findAll(data: IGetMedicationFilterDTO) {
    return await this.ormRepository.findAll({
      where: { ...data },
      include: [
        {
          model: Drone,
        },
      ],
    });
  }

  async findOne(data: IGetMedicationFilterDTO) {
    return await this.ormRepository.findOne({
      where: { ...data },
      include: [
        {
          model: Drone,
          as: 'Drone',
        },
      ],
    });
  }

  async create(data: MedicationCreationArrtibutes) {
    return await this.ormRepository.create({ ...data });
  }

  async update(updateData: IGetMedicationFilterDTO, data: IMedicationDTO) {
    await this.ormRepository.update(data, { where: { ...updateData } });
  }
}

export default MedicationRepository;
