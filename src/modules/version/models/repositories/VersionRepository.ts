import { Repository } from 'typeorm';
import Version from '../entities/Version';
import ICreateVersionDTO from '../../dtos/ICreateVersionDTO';
import appDataSource from '../../../../config/database.config';
import IGetVersionFilterDTO, { IGetVersionData } from '../../dtos/IGetVersionFilterDTO';
import IVersionDTO from '@modules/version/dtos/IVersionDTO';
export type getVersionFilterType = 'build_number' | 'package_name' | 'version_no';

class VersionRepository {
  private ormRepository: Repository<Version>;

  constructor() {
    this.ormRepository = appDataSource.getRepository(Version);
  }

  async findByPackageName(package_name: string): Promise<Version | undefined> {
    const user = await this.ormRepository.findOne({
      where: { package_name },
    });

    return user || undefined;
  }

  async findById(id: string, application_name?: string): Promise<Version | null> {
    const filter: any = { id };
    application_name ? (filter.application_name = application_name) : null;

    return await this.findOneExecuter({ id });
  }

  async create(data: ICreateVersionDTO): Promise<Version> {
    const application = this.ormRepository.create(data);

    await this.ormRepository.save(application);

    return application;
  }

  async findOneBy(
    searchWith: 'build_number' | 'package_name' | 'version_no',
    value: string,
    appName?: string
  ): Promise<Version | null> {
    const data: { build_number?: string; package_name?: string; version_no?: string; application_name?: string } = {};
    data[searchWith] = value;

    appName ? (data['application_name'] = appName) : null;
    return await this.findOneExecuter(data);
  }

  async findOneByVersionData(data: IGetVersionFilterDTO): Promise<Version | null> {
    return await this.findOneExecuter(data);
  }

  private async findOneExecuter(data: IGetVersionFilterDTO): Promise<Version | null> {
    const application = await this.ormRepository.findOne({
      where: data,
      select: [
        'id',
        'package_name',
        'screenshots',
        'build_number',
        'file_extension',
        'compatible_model_names',
        'created_at',
        'build_number',
        'version_no',
        'download_no',
        'file_url',
      ],
    });

    if (application?.screenshots) {
      application.screenshots = application.screenshots.replace(`{`, '[');
      application.screenshots = application.screenshots.replace(`}`, ']');
      application.screenshots = JSON.parse(application.screenshots);
    }

    return application || null;
  }

  async findAll(data: IGetVersionData): Promise<Version[]> {
    const page = data.filterOptions?.page ? Number(data.filterOptions.page) : 1;
    const limit = data.filterOptions?.limit ? Number(data.filterOptions.limit) : 10;

    const applications = await this.ormRepository.find({
      where: data.searchFilter,
      select: [
        'id',
        'package_name',
        'screenshots',
        'build_number',
        'file_extension',
        'compatible_model_names',
        'version_no',
        'latest',
        'created_at',
        'updated_at',
        // 'package_name',
      ],
      order: {
        created_at: 'DESC',
      },
      skip: (page - 1) * limit,
      take: limit,
    });
    return applications;
  }

  async save(versionData: IVersionDTO): Promise<Version> {
    const a = await this.ormRepository.save(versionData);

    return a;
  }

  async findActive(packageName: string): Promise<IVersionDTO | null> {
    const application = await this.ormRepository.findOneBy({ package_name: packageName, latest: true });
    return application;
  }

  async updateVersionData(searchFilter: IGetVersionFilterDTO, updateData: IGetVersionFilterDTO) {
    await this.ormRepository
      .createQueryBuilder()
      .update(Version)
      .set(updateData)
      .where('id = :id ', { searchFilter })
      .execute();
    return;
  }
}

export default VersionRepository;
