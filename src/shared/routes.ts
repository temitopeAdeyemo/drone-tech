import { Router } from 'express';
import droneRouter from '../modules/drone/routes/routes';
import medicationRouter from '../modules/medication/routes/routes';

const router = Router();

router.use('/medication', medicationRouter);
router.use('/drone', droneRouter);

export default router;
