import { Router } from 'express';
import subTodosController from '../controllers/subTodosController.ts';

const router = Router();


router.get('/getAll', subTodosController.getAll);
router.get('/get', subTodosController.getById);
router.delete('/delete', subTodosController.deleteById);
router.post('/create', subTodosController.createTodo);
router.put('/update', subTodosController.updateTodo);




export default router;