"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MedicationRepository {
    async findAll(data) {
        await this.ormRepository.findAll({
            where: { ...data },
        });
    }
    async create(data) {
        await this.ormRepository.create({ ...data });
    }
    async update(updateData, data) {
        await this.ormRepository.update(data, { where: { ...updateData } });
    }
}
exports.default = MedicationRepository;
