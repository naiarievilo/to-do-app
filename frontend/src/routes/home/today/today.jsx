import { useLocation } from "react-router-dom";

import { TodoList } from "@/features/todos/index.js";
import { loginRequired } from "@/lib/utils.js";

export function Today() {
  const route = useLocation().pathname;
  loginRequired(route);

  return <TodoList />;
}
