import { getWeeklyTodoLists } from "@/features/todos/index.js";
import { isLoggedIn, redirect } from "@/lib/utils.js";

export async function weekLoader() {
  if (!isLoggedIn()) {
    return redirect("/");
  }

  try {
    const response = await getWeeklyTodoLists();
    const weeklyLists = response.data;
    console.log(weeklyLists);
    return weeklyLists;
  } catch (err) {
    alert(err.message);
  }
}
