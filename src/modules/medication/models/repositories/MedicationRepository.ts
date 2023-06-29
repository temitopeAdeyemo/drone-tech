import { db } from '../../../../shared/database/base';
import IGetMedicationFilterDTO from '../../dtos/IGetMedicationFilterDTO';
import IMedicationDTO from '../../dtos/IMedicationDTO';
import { MedicationCreationArrtibutes } from '../entities/Medication';

class MedicationRepository {
  private ormRepository: typeof db.Medication;

  async findAll(data: IGetMedicationFilterDTO) {
    this.ormRepository.findAll({
      where: { ...data },
    });
  }

  async create(data: MedicationCreationArrtibutes) {
    this.ormRepository.create({ ...data });
  }

  async update(updateData: IGetMedicationFilterDTO, data: IMedicationDTO) {
    this.ormRepository.update(data, { where: { ...updateData } });
  }
}

export default MedicationRepository;
