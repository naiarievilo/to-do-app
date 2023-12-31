import { PropTypes } from "prop-types";

import { Separator } from "@/ui/separator.jsx";

import { AddTodo } from "./add-todo.jsx";
import { Todo } from "./todo.jsx";

export function TodoList({ date, todos }) {
  return (
    <section
      className="w-full mx-12 mb-12 mt-4 flex flex-col rounded-3xl px-12 pb-16
      pt-4"
    >
      <TodoListHeader date={date} />
      <Separator className="bg-slate-400" />
      <ul className="my-4 flex flex-col rounded-xl">
        {todos.map((todo) => (
          <>
            <Todo
              key={todo.todo_id}
              id={todo.todo_id}
              data={todo.todo}
              isChecked={todo.checked}
            />
            <Separator className="my-2" />
          </>
        ))}
        <AddTodo id={date} />
      </ul>
    </section>
  );
}
TodoList.propTypes = {
  date: PropTypes.date,
  list_id: PropTypes.numeric,
  todos: PropTypes.array,
};

function TodoListHeader({ date }) {
  const dateFormatted = date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <header className="my-4 flex items-center justify-between rounded-2xl">
      <h2 className="text-3xl font-bold tracking-tight text-slate-700">
        {dateFormatted}
      </h2>
    </header>
  );
}
TodoListHeader.propTypes = {
  date: PropTypes.date,
};
