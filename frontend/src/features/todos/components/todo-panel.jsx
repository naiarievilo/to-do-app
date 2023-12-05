import { PropTypes } from "prop-types";

import { TodoList } from "@/features/todos/index.js";

export function TodoPanel({ todoLists }) {
  return (
    <ul className="flex h-full w-full flex-col">
      {todoLists.map((todoList) => (
        <TodoList
          key={todoList.date}
          date={todoList.date}
          todos={todoList.todos}
        />
      ))}
    </ul>
  );
}
TodoPanel.propTypes = {
  todoLists: PropTypes.array,
};
