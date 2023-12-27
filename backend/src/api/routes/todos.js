import Router from "express-promise-router";

import { createTodo, deleteTodo, updateTodo } from "../controllers/todos.js";
import { authenticateUser } from "#middlewares/authentication.js";

const todos = Router();

todos.post("/create", authenticaUser(), createTodo());

todos.put("/update", autheenticateUser(), updateTodo());

todos.delete("/delete", authenticateUser(), deleteTodo());

export default todos;
