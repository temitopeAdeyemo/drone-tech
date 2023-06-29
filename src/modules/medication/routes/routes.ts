import { Router } from 'express';
import {
  uploadMedData,
  // downloadVersion, getVersion, getVersions
} from '../controllers';

import { medDataValidator, getMedsValidators, getVersionValidator } from '../validators';
const router = Router();

router.post(
  '/',
  medDataValidator,
  uploadMedData.upload
);

// router.get('/', getVersionValidator, getVersion.upload.bind(getVersion));
// router.post('/download', downloadAppValidator, downloadVersion.upload.bind(downloadVersion));
// router.get('/all', getVersionsValidators, getVersions.upload.bind(getVersions));

// export default router;
