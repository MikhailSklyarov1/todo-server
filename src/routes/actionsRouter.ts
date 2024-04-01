import { Router } from 'express';
import lessonController from '../controllers/lessonController.ts';

const router = Router();


router.get('/getAll', lessonController.getAll);
router.get('/get', lessonController.getById);
router.delete('/delete', lessonController.deleteById);
router.post('/create', lessonController.createTodo);




export default router;