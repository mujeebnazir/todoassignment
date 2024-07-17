import { Todo } from "../models/todo.model.js";

const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();

    return res.status(200).json(todos);
  } catch (error) {
    console.error("Error fetching todos:", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const createTodo = async (req, res) => {
  try {
    const { title, description } = req.body;
    if (!title || !description) {
      throw new Error("Both inputs required!");
    }
    const todo = await Todo.create({
      title: title,
      description: description,
    });

    if (!todo) {
      throw new Error("Something went wrong while creating documt");
    }
    return res.status(200).json(todo);
  } catch (error) {
    throw new Error(error.message);
  }
};

const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      throw new Error("id not found");
    }
    const response = await Todo.findByIdAndDelete(id);

    return res.status(200).json(response);
  } catch (error) {
    throw new Error(error.message);
  }
};

const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;

    if (!id) {
      throw new Error("id not found");
    }
    const response = await Todo.findByIdAndUpdate(id, {
      title: title,
      description: description,
    });

    return res.status(200).json(response);
  } catch (error) {
    throw new Error(error.message);
  }
};

export { updateTodo, createTodo, deleteTodo, getTodos };
