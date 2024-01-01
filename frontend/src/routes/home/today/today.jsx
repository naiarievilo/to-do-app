import { useLoaderData } from "react-router-dom";

import { TodoPanel, TodoContainer } from "@/features/todos/index.js";

export function Today() {
  const { data } = useLoaderData();

  return (
    <TodoContainer>
      <TodoPanel data={data} />;
    </TodoContainer>
  );
}
