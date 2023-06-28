import Application from '../models/entities/Application';

export default interface ICreateAppDTO {
  application_name: string;
  icon?: string;
  latest_version?: string;
  description: string;
  platform: string;
  program_file_name?: string;
  program_file_version?: string;
  organization?: string;
  package_name: string;
}
