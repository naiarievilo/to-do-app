import axios from "axios";

export async function getTodaysTodoList() {
  return axios.get("/todolists/today");
}

export async function getWeeklyTodoLists() {
  return axios.get("/todolists/week");
}
