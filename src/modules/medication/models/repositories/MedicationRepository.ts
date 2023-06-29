import { db } from '../../../../shared/database/base';
import IGetMedicationFilterDTO from '../../dtos/IGetMedicationFilterDTO';
import IMedicationDTO from '../../dtos/IMedicationDTO';
import { MedicationCreationArrtibutes } from '../entities/Medication';

class MedicationRepository {
  private ormRepository: typeof db.Medication;

  async findAll(data: IGetMedicationFilterDTO) {
    await this.ormRepository.findAll({
      where: { ...data },
    });
  }

  async create(data: MedicationCreationArrtibutes) {
    await this.ormRepository.create({ ...data });
  }

  async update(updateData: IGetMedicationFilterDTO, data: IMedicationDTO) {
    await this.ormRepository.update(data, { where: { ...updateData } });
  }
}

export default MedicationRepository;
