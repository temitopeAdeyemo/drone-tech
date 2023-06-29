import { Router } from 'express';
import { createApp, getDronesData, getDroneData, getBatteryLevel, getIdleDrone } from '../controllers';

import { droneDataValidator, getDroneValidator } from '../validators';
const router = Router();

router.post(
  '/',
  droneDataValidator,
  createApp.upload.bind(createApp)
);
router.get('/', getDroneValidator, getDroneData.fetch);
router.get('/all', getDroneValidator, getDronesData.fetch);
router.get('/idle-state', getDroneValidator, getIdleDrone.fetch);
router.get('/battery-level', getDroneValidator, getBatteryLevel.fetch);

export default router;
