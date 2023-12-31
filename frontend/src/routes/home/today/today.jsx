import { useLoaderData } from "react-router-dom";

import { TodoPanel } from "@/features/todos/index.js";

export function Today() {
  const { data } = useLoaderData();

  return <TodoPanel data={data} />;
}
