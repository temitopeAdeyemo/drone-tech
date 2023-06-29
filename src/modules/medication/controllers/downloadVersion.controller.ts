import { jsonResponse } from '../../../shared/utils/AppSuccess';
import { Request, Response, NextFunction } from 'express';
import { DownloadVersionService } from '../services';
import { IGetVersionQueryDTO } from '../dtos/IGetMedicationFilterDTO';
import AppError from '../../../shared/utils/AppError';

class DownloadVersion {
  async upload(req: Request<{}, {}, {}, IGetVersionQueryDTO | any>, res: Response, next: NextFunction) {
    const { application_name, package_name, version_no, build_number, platform } = req.query;

    const response = await new DownloadVersionService().execute({
      application_name,
      package_name,
      version_no,
      build_number,
      platform,
    });

    res.download(response.fileUrl, (err) => {
      if (err) return res.status(500).json({ error: true, message: 'File downloaded could not completed !' });
    });
  }
}

export default new DownloadVersion();
