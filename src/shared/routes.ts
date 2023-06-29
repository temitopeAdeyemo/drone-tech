import { Router } from 'express';
import applicationRouter from '../modules/drone/routes/routes';
import versionRouter from '../modules/medication/routes/routes';

const router = Router();

router.use('/application', applicationRouter);
router.use('/version', versionRouter);

export default router;
