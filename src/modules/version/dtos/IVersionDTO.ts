export default interface IVersionDTO {
  md5_encoding: string;
  application_name: string;
  package_name: string;
  version_name: string;
  screenshots: string;
  build_number: string;
  version_no: string;
  latest: boolean;
  file_extension: string;
  description: string;
  file_url: string;
  compatible_model_names: string[];
  download_no: string;
}
