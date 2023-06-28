import Version from '../../../modules/version/models/entities/Version';

export default interface IApplicationDTO {
  application_name: string;
  icon: string;
  platform: string;
  description: string;
  shareToSubOrganization?: boolean;
  program_file_name?: string;
  program_file_version?: string;
  status: string;
  latest_version: string;
  organization?: string;
  package_name: string;
}
