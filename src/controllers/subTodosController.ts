import { Request, Response } from "express";
import { SubTodos } from "../models/Content.ts";

class SubTodoController {
  async getAll(req: Request, res: Response) {
    try {
      const id = req.query.id as string;
      if (typeof id !== "string" || id === "") {
        return res.status(400).json({ error: "Invalid lesson_id" });
      }

      const todos = await SubTodos.findAll({
        where: {
          todo_id: id,
        },
      });

      if (!todos) {
        return res.status(404).json({ message: "Todo not found" });
      }

      return res.status(200).json(todos);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal Error" });
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const id = req.query.id as string;

      if (typeof id !== "string" || id === "") {
        return res.status(400).json({ error: "Invalid lesson_id" });
      }

      const todo = await SubTodos.findOne({
        where: {
          id,
        },
      });

      if (!todo) {
        return res.status(404).json({ message: "Todo not found" });
      }

      return res.status(200).json(todo);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal Error" });
    }
  }

  async deleteById(req: Request, res: Response): Promise<Response> {
    try {
      const id = req.query.id as string;
      const idSub = req.query.id_sub as string;

      if (typeof id !== "string" || id === "") {
        return res.status(400).json({ error: "Invalid lesson_id" });
      }

      await SubTodos.destroy({
        where: {
          id: idSub,
        },
      });

      const allTodos = await SubTodos.findAll({
        where: {
          todo_id:id,
        },
      });

      return res.status(200).json(allTodos);
    } catch (error) {
      return res.status(500).json({ error: "Internal Error" });
    }
  }

  async createTodo(req: Request, res: Response): Promise<Response> {
    try {
      const id = req.query.id as string;

      if (typeof id !== "string" || id === "") {
        return res.status(400).json({ error: "Invalid lesson_id" });
      }

      const { name, task, isComplete } = req.body;
      const newTodo = await SubTodos.create({
        name,
        task,
        isComplete,
        todo_id: id,
      });

      const todos = await SubTodos.findAll({
        where: {
          todo_id: id,
        },
      });

      if (!todos) {
        return res.status(404).json({ message: "Todo not found" });
      }

      return res.status(200).json(todos);
    } catch (error) {
      return res.status(500).json({ error: "Internal Error" });
    }
  }

  async updateTodo(req: Request, res: Response): Promise<Response> {
    try {
      const id = req.query.id as string;
      const idSub = req.query.id_sub as string;
      const { name, task, isComplete } = req.body;
      const todo = await SubTodos.findByPk(idSub);
      if (!todo) {
        return res.status(404).json({ error: "Todo not found" });
      }

      await todo.update({
        name,
        task,
        isComplete,
        id_todo: id,
      });

      const todos = await SubTodos.findAll({
        where: {
          todo_id: id,
        },
      });

      if (!todos) {
        return res.status(404).json({ message: "Todo not found" });
      }

      return res.status(200).json(todos);
    } catch (error) {
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

export default new SubTodoController();
