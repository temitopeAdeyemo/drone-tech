import { generateOTP } from '../utils';
import * as uuid from 'uuid';
import fileSys from '../../shared/Helpers/FsHelper';
import path from 'path';

export type IBaseResponse = null | void | object;
export type CredentialTypes = 'email' | 'phone_number';

export interface IBaseService {
  execute: (args: any) => Promise<IBaseResponse>;
}

export default abstract class BaseService {

  protected readonly applicationFolder = path.join(__dirname, '../public/uploads/application_files/');
  /**
   * This property returns a generated otp
   */
  protected readonly generateOTP = generateOTP();

  /**
   * This property returns a generated uuid number
   */
  protected readonly uuid = uuid.v4();

  /**
   * This property creates a user when called.
   */

  protected generatedOtp = this.generateOTP;

  protected async createDirIfNotExist(packageName: string): Promise<void> {
    await fileSys.createDirIfNotExist_(`${this.applicationFolder}/${packageName}`);
  }

  protected async createVersDirIfNotExist(packageName: string, appVersion: string): Promise<void> {
    await fileSys.createDirIfNotExist_(`${this.applicationFolder}/${packageName}`);
    await fileSys.createDirIfNotExist_(`${this.applicationFolder}/${packageName}/${appVersion}`);
  }

  protected removeFolder(path: string) {
    return fileSys.removeFolder(path);
  }
}
