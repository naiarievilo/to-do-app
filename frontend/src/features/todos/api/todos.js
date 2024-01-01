import axios from "axios";

export async function createTodo(todoInfo) {
  return await axios.post("/todos/create", todoInfo);
}

export async function updateTodo(todoInfo) {
  return await axios.put("/todos/update", todoInfo);
}

export async function deleteTodo(todoInfo) {
  return await axios.delete("/todos/delete", todoInfo);
}
