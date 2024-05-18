import { Request, Response } from 'express';
import { Todos } from '../models/Content.ts';


class LessonController {

  async getAll(req: Request, res: Response) {
    const todos = await Todos.findAll();
    return res.json(todos);
  }


  async getById(req: Request, res: Response) {
    try {
      const id = req.query.id as string;

      if (typeof id !== 'string' || id === '') {
        return res.status(400).json({ error: 'Invalid lesson_id' });
      }

      const todo = await Todos.findOne({
        where: {
          id
        }
      })

      if (!todo) {
        return res.status(404).json({ message: 'Todo not found' });
      }

      return res.status(200).json(todo);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Internal Error' });
    }
  }


  async deleteById(req: Request, res: Response): Promise<Response> {
    try {
      const id = req.query.id as string;

      if (typeof id !== 'string' || id === '') {
        return res.status(400).json({ error: 'Invalid lesson_id' });
      }

      await Todos.destroy({
        where: {
          id
        },
      });

      const allTodos = await Todos.findAll({
        where: {
          id,
        },
      });

      return res.status(200).json(allTodos);
    } catch (error) {
      return res.status(500).json({ error: 'Internal Error' });
    }
  }



  async createTodo(req: Request, res: Response): Promise<Response> {
    try {
      const { name, task, isComplete } = req.body;
      const newTodo = await Todos.create({
        name,
        task,
        isComplete,
      });

      const todos = await Todos.findAll();

      return res.status(200).json(todos);
    } catch (error) {
      return res.status(500).json({ error: 'Internal Error' });
    }
  }



  async updateTodo(req: Request, res: Response): Promise<Response> {
  try {
    const id = req.query.id as string;
    const { name, task, isComplete } = req.body;
    const todo = await Todos.findByPk(id);
    if (!todo) {
      return res.status(404).json({ error: 'Todo not found' });
    }

    await todo.update({
      name,
      task,
      isComplete,
    });

    const updatedTodos = await Todos.findAll();

    return res.status(200).json(updatedTodos);
  } catch (error) {

    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

}

export default new LessonController();
