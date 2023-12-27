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

todoLists.post("/create", authenticateUser(), createTodoList());

todoLists.delete("/delete", authenticateUser(), deleteTodoList());

export default todoLists;
