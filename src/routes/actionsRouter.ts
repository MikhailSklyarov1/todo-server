import { Router } from 'express';
import todosController from '../controllers/todosController.ts';

const router = Router();


router.get('/getAll', todosController.getAll);
router.get('/get', todosController.getById);
router.delete('/delete', todosController.deleteById);
router.post('/create', todosController.createTodo);
router.put('/update', todosController.updateTodo);




export default router;