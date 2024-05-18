import { Router } from 'express';
import actionsRouter from './actionsRouter.js';
import actionsSubTodosRouter from './actionsSubTodosRouter.ts';

const router = Router();

router.use('/actions', actionsRouter);
router.use('/actionsSubTodos', actionsSubTodosRouter);

export default router;