import { PropTypes } from "prop-types";

import { TodoList } from "@/features/todos/index.js";

export function TodoPanel({ data }) {
  return (
    <ul className="flex h-full w-full grow flex-col">
      {data.map((todolist) => (
        <TodoList
          key={todolist.listId}
          listId={todolist.listId}
          listDate={new Date(todolist.listDate)}
          todos={todolist.todos}
        />
      ))}
    </ul>
  );
}
TodoPanel.propTypes = {
  data: PropTypes.array,
};
