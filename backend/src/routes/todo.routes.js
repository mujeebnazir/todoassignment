import { Router } from "express";
import {
  updateTodo,
  createTodo,
  deleteTodo,
  getTodos,
} from "../controllers/todo.controllers.js";

const router = Router();

router.route("/get-todos").get(getTodos);
router.route("/create-todo").post(createTodo);
router.route("/update-todo/:id").patch(updateTodo);
router.route("/delete-todo/:id").delete(deleteTodo);

export default router;
