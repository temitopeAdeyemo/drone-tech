import { Repository } from 'typeorm';
import Application from '../entities/Application';
import ICreateAppDTO from '../../dtos/ICreateAppDTO';
import appDataSource from '../../../../config/database.config';
import IGetAppFilterDTO, { IGetAppData } from '@modules/application/dtos/IGetAppFilterDTO';
import { versionDataSelector } from '../../../../shared/utils';
import IDeleteAppFilterDTO from '../../../application/dtos/IDeleteAppDTO';

class ApplicationRepository {
  private ormRepository: Repository<Application>;

  constructor() {
    this.ormRepository = appDataSource.getRepository(Application);
  }

  async findByPackageName(package_name: string): Promise<Application | null> {
    const application = await this.ormRepository.findOne({
      where: { package_name },
    });

    return application || null;
  }

  async findById(id: string): Promise<Application | null> {
    return await this.findOneExecuter({ id });
  }

  async create(data: ICreateAppDTO): Promise<Application> {
    const application = this.ormRepository.create(data);

    await this.ormRepository.save(application);

    return application;
  }

  async findOneByPackageName(data: string): Promise<Application | null> {
    return await this.findOneExecuter({ package_name: data });
  }

  async getAppPopLtVersion(packageName: string): Promise<Application | null> {
    const application = await this.ormRepository
      .createQueryBuilder('application')
      .innerJoinAndSelect('application.versions', 'version', 'version.latest = :latest', { latest: true })
      .where('application.application_name = :application_name', { packageName: packageName })
      .getOne();

    return application;
  }

  async getAppPopVersions(data: IGetAppFilterDTO): Promise<Application | null> {
    const application = await this.ormRepository
      .createQueryBuilder('application')
      .innerJoinAndSelect('application.versions', 'versions')
      .where('application.application_name = :application_name', data)
      .getOne();

    const filteredAppDetails = versionDataSelector(['version_no', 'id'], application, 'single');
    return filteredAppDetails;
  }

  async findOneByAppData(data: IGetAppFilterDTO): Promise<Application | null> {
    return await this.findOneExecuter(data);
  }

  private async findOneExecuter(data: IGetAppFilterDTO): Promise<Application | null> {
    const application = await this.ormRepository.findOne({
      where: data,
      select: [
        'id',
        'package_name',
        'application_name',
        'icon',
        'platform',
        'program_file_name',
        'program_file_version',
        'created_at',
      ],
    });

    return application || null;
  }

  async findAll(data: IGetAppData): Promise<Application[]> {
    const page = data.filterOptions?.page ? Number(data.filterOptions.page) : 1;
    const limit = data.filterOptions?.limit ? Number(data.filterOptions.limit) : 10;

    const application = await this.ormRepository.find({
      where: data.searchFilter,
      select: [
        'id',
        'application_name',
        'icon',
        'platform',
        'program_file_name',
        'program_file_version',
        'created_at',
        'updated_at',
        "package_name",
        "description",
        "latest_version"
      ],
      order: {
        created_at: 'DESC',
      },
      skip: (page - 1) * limit,
      take: limit,
    });

    return application;
  }

  async save(application: ICreateAppDTO): Promise<Application> {
    return this.ormRepository.save(application);
  }

  async deleteAppByData(data: IDeleteAppFilterDTO) {
    return this.ormRepository.delete(data);
  }

  async updateVersionData(searchFilter: IGetAppFilterDTO, updateData: IGetAppFilterDTO) {
    await this.ormRepository.update(searchFilter, updateData);
    return;
  }
}

export default ApplicationRepository;
