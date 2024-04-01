import { Router } from 'express';
import actionsRouter from './actionsRouter.js';

const router = Router();

router.use('/actions', actionsRouter);

export default router;