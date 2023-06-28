import { generateOTP } from '../utils';
import * as uuid from 'uuid';
import dbRepoHelper from '../Helpers/DbRepoHelper';
import emailSmsHelper from '../Helpers/EmailSmsHelper';
import otpHelper from '../Helpers/OtpHelper';
import passwordHelpers from '../Helpers/PasswordHelpers';
import extraHelpers from '../Helpers/ExtraHelpers';
import fileSys from '../../shared/Helpers/FsHelper';
import JwtClient from '../services/JWT';
import path from 'path';

export type IBaseResponse = null | void | object;
export type CredentialTypes = 'email' | 'phone_number';

export interface IBaseService {
  execute: (args: any) => Promise<IBaseResponse>;
}

export default abstract class BaseService {
  protected readonly jwtClient = new JwtClient();

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
  protected createUser = dbRepoHelper.createUser_.bind(dbRepoHelper);

  protected throwCredTaken = dbRepoHelper.credentialTaken_.bind(dbRepoHelper);

  protected getUser = dbRepoHelper.getUser_.bind(dbRepoHelper);

  protected sendOtpMail = emailSmsHelper.sendOtpMail_.bind(emailSmsHelper);

  protected hashPassword = passwordHelpers.hashPassword_.bind(passwordHelpers);

  protected checkPassword = passwordHelpers.checkPassword_.bind(passwordHelpers);

  protected cacheOtp = otpHelper.cacheOtp_.bind(otpHelper);

  protected generatedOtp = this.generateOTP;

  protected returnNumberOREmail = extraHelpers.returnNumberOREmail_.bind(extraHelpers);

  protected getUserByPhoneOREmail = dbRepoHelper.getUserByPhoneOREmail_.bind(dbRepoHelper);

  protected throwCredVerified = extraHelpers.checkCredentialNotVerified_.bind(extraHelpers);

  protected throwCredNotVerified = extraHelpers.checkCredentialVerified_.bind(extraHelpers);

  protected getAndValidateOtp = otpHelper.getAndValidateOtp_.bind(otpHelper);

  protected updateUser = dbRepoHelper.updateUser_.bind(dbRepoHelper);

  protected hashAndUpdatePassword = passwordHelpers.hashAndUpdatePassword_.bind(passwordHelpers);

  protected deleteCachedOtp = otpHelper.deleteCachedOtp_.bind(otpHelper);

  protected getCachedOtp = otpHelper.getCachedOtp_.bind(otpHelper);

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
