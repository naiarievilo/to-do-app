import Router from "express-promise-router";

import {
  getTodaysTodoList,
  getWeeklyTodoLists,
  getUpcomingTodoLists,
  createTodoList,
  deleteTodoList,
} from "../controllers/todolists.js";
import { authenticateUser } from "#middlewares/authentication.js";

const todoLists = Router();

todoLists.get("/today", authenticateUser(), getTodaysTodoList());

todoLists.get("/week", authenticateUser(), getWeeklyTodoLists());

todoLists.get("/upcoming", authenticateUser(), getUpcomingTodoLists());

todoLists.post("/", authenticateUser(), createTodoList());

todoLists.delete("/", authenticateUser(), deleteTodoList());

export default todoLists;
