import { useLoaderData } from "react-router-dom";

import { TodoList } from "@/features/todos/index.js";

export function Today() {
  const { data } = useLoaderData();

  return (
    <>
      {data.map((todolist) => 
        <TodoList
          key={todolist.listId}
          date={new Date(todolist.listDate)}
          todos={todolist.todos}
        />
      )}
    </>
  );
}
