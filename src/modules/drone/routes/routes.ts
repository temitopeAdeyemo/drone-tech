import { Router } from 'express';
import {
  createApp,
  // getApplications, getApplication, downloadApp
} from '../controllers';

import { droneDataValidator, getDroneValidator } from '../validators';
const router = Router();

router.post(
  '/',
  droneDataValidator,
  createApp.upload.bind(createApp)
);
// router.get('/', getDroneValidator, getApplication.get);
// router.get('/all', getApplications.upload.bind(getApplications));

export default router;
