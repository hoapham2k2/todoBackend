import { todo } from "../models/TodoModel.js";

export const getTodos = async (req, res) => {
  try {
    // get todo items from the database
    const todos = await todo.find();
    // console log todos
    console.log(todos);
    // respone success
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const createTodo = async (req, res) => {
  try {
    const newTodo = {
      title: req.body.title,
      completed: req.body.completed,
    };
    const Todo = new todo(newTodo);
    await Todo.save();

    // respone status success
    res.status(200).json(Todo);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getTodo = async (req, res) => {
  try {
    const id = req.params.id;
    const Todo = await todo.findById(id);
    res.status(200).json(Todo);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateTodo = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedTodo = {
      title: req.body.title,
      completed: req.body.completed,
    };
    const Todo = await todo.findByIdAndUpdate(id, updatedTodo, {
      new: true,
    });
    res.status(200).json(Todo);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteTodo = async (req, res) => {
  try {
    const id = req.params.id;
    await todo.findByIdAndDelete(id);
    res.status(200).json("Todo has been deleted");
  } catch (error) {
    res.status(500).json(error);
  }
};
