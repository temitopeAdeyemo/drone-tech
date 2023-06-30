import { Router } from 'express';
import {
  createApp,
  getDronesData,
  getDroneData,
  getBatteryLevel,
  getIdleDrone,
  getUnidleDrones,
  getUnidleDrone,
} from '../controllers';

import { droneDataValidator, getDroneValidator, getUnidleDronesValidator } from '../validators';
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
router.get('/loaded-one', getUnidleDronesValidator, getUnidleDrone.fetch);
router.get('/all-loaded', getUnidleDronesValidator, getUnidleDrones.fetch);

export default router;
