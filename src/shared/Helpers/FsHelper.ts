import * as fs from 'fs';
import AppError from '../utils/AppError';
import fs_extra from 'fs-extra';

class FileSys {
  async createDirIfNotExist_(path: string) {
    if (!fs.existsSync(path)) {
      fs.mkdirSync(path);
    }

    return;
  }

  async uploadFile_(file: any, dir: string): Promise<any> {
    await this.createDirIfNotExist_(dir);

    if (dir.endsWith('file')) {
      file.name = file.name.replace(/\s+/g, '-');
      file.mv(`${dir}/${file.name}`, (err: any) => {
        if (err) throw new AppError('Application file not Sucessfully uploaded', 500);
      });
    }

    if (dir.endsWith('screenshots')) {
      let fileUrls: string[] = [];
      file.forEach((i: any) => {
        i.name = i.name.replace(/\s+/g, '-');

        i.mv(`${dir}/${i.name}`, (err: any) => {
          if (err) throw new AppError('screenshots file not Sucessfully uploaded', 500);
        });
        fileUrls.push(dir.slice(dir.indexOf('/uploads')) + `/${i.name}`);
      });

      return fileUrls;
    }

    if (dir.endsWith('icon')) {
      file.name = file.name.replace(/\s+/g, '-');
      file.mv(`${dir}/${file.name}`, (err: any) => {
        if (err) throw new AppError('icon file not Sucessfully uploaded', 500);
      });
    }
    return dir.slice(dir.indexOf("/uploads"))+`/${file.name}`;
  }

  async dirExists_(path: string) {
    return fs.existsSync(path);
  }

  async checkFileExists(path: string) {
    return fs.existsSync(path);
  }

  async throwFileExists(path: string) {
    if (await this.checkFileExists(path)) throw new AppError('File Exists.');
    return;
  }

  async throwFileNotFound(path: string): Promise<void> {
    if (!(await this.checkFileExists(path))) throw new AppError('File not found.');
    return;
  }

  async removeFolder(path: string): Promise<void> { 
    fs_extra.removeSync(path);
  }
}

const fileSys = new FileSys();
export default fileSys;
