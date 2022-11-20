import express from "express";
import {
  getTodos,
  createTodo,
  getTodo,
  updateTodo,
  deleteTodo,
} from "../controllers/todos.js";
const router = express.Router();
router.get("/", getTodos);
router.post("/", createTodo);

router.get("/:id", getTodo);
router.put("/:id", updateTodo);
router.delete("/:id", deleteTodo);

export default router;
