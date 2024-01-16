import Router from "express-promise-router";

import { createTodo, deleteTodo, updateTodo } from "../controllers/todos.js";
import { authenticateUser } from "#middlewares/authentication.js";

const todos = Router();

todos.post("/", authenticateUser(), createTodo());

todos.put("/", authenticateUser(), updateTodo());

todos.delete("/", authenticateUser(), deleteTodo());

export default todos;
