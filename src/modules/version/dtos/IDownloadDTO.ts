export default interface IDownloadDTO {
  package_name?: string;
  application_name: string;
  version_no: string;
  version_name?: string;
  build_number?: string;
  program_file_name?: string;
  status?: string;
  platform?: string;
}
