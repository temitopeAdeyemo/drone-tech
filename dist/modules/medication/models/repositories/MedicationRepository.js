"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MedicationRepository {
    async findAll(data) {
        this.ormRepository.findAll({
            where: { ...data },
        });
    }
    async create(data) {
        this.ormRepository.create({ ...data });
    }
    async update(updateData, data) {
        this.ormRepository.update(data, { where: { ...updateData } });
    }
}
exports.default = MedicationRepository;
