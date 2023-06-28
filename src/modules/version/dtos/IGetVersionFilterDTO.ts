export default interface IGetVersionFilterDTO {
  id?: string;
  application_name?: string;
  package_name?: string;
  version_name?: string;
  build_number?: string;
  version_no?: string;
  latest?: boolean;
  download_no?: string;
  platform?: string;
}

export interface FilterOptions {
  page: string;
  limit: string;
}

export interface IGetVersionData {
  searchFilter: IGetVersionFilterDTO;
  filterOptions?: FilterOptions;
}

export interface IGetVersionQueryDTO {
  id?: string;
  package_name?: string;
  build_number?: string;
  file_url?: string;
  version_no: string;
  application_name: string;
  platform: string;
}

export interface IGetVersionsQueryDTO extends FilterOptions, IGetVersionFilterDTO {}
