import { TodoList } from "@/features/todos/index.js";
import { mockTodos } from "@/mock-data.js";
import { TodoContainer } from "@/features/todos/index.js";

export function Today() {
  return (
    <TodoContainer>
      {mockTodos.map((list) => (
        <TodoList key={list.date} date={list.date} todos={list.todos} />
      ))}
    </TodoContainer>
  );
}
