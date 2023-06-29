import { Router } from 'express';
import { uploadMedData, getMedication, getMedications } from '../controllers';

import { medDataValidator, getMedsValidator, getMedsValidators } from '../validators';
const router = Router();

router.post('/', medDataValidator, uploadMedData.upload);

router.get('/', getMedsValidator, getMedication.fetch);
router.get('/all', getMedsValidators, getMedications.fetch);

export default router;
