import { getTodaysTodoList } from "@/features/todos/index.js";
import { isLoggedIn, redirect } from "@/lib/utils.js";

export async function todayLoader() {
  if (!isLoggedIn()) {
    return redirect("/");
  }

  try {
    const response = await getTodaysTodoList();
    const todaysList = response.data;
    console.log( { todaysList });
    console.log(todaysList);
    return todaysList;
  } catch (err) {
    alert(err.message);
  }
}
