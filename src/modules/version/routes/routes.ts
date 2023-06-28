import { Router } from 'express';
import { createVersion, downloadVersion, getVersion, getVersions } from '../controllers';

import { downloadAppValidator, getVersionsValidators, getVersionValidator } from '../validators/';
const router = Router();

router.post(
  '/',
  // uploadAppValidator,,
  createVersion.upload.bind(createVersion)
);

router.get('/', getVersionValidator, getVersion.upload.bind(getVersion));
router.post('/download', downloadAppValidator, downloadVersion.upload.bind(downloadVersion));
router.get('/all', getVersionsValidators, getVersions.upload.bind(getVersions));

export default router;
