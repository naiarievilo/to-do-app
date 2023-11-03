import { PropTypes } from "prop-types";

import { AddIcon } from "@/assets/index.js";
import { Button } from "@/ui/button.jsx";
import { Separator } from "@/ui/separator.jsx";

import { Todo } from "./todo.jsx";

export function TodoList({ date, todos }) {
  return (
    <section
      className="mx-12 mb-12 mt-4 flex w-full flex-col rounded-3xl border-2
      border-slate-200/90 bg-slate-50/10 px-12 pb-16 pt-4 shadow-sm"
    >
      <TodoListHeader date={date} />
      <Separator className="bg-rose-500" />
      <ul className="my-8 flex flex-col rounded-xl">
        {todos.map((todo) => (
          <Todo key={todo.id} data={todo.data} isChecked={todo.checked} />
        ))}
        <AddTodo />
      </ul>
    </section>
  );
}
TodoList.propTypes = {
  date: PropTypes.date,
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
    <header className="mb-8 mt-4 flex items-baseline justify-between rounded-2xl">
      <h2 className="text-2xl font-bold tracking-tight text-slate-700">
        {dateFormatted}
      </h2>
      <Button>
        <h3 className="text-md tracking-wide text-slate-400 hover:text-rose-500">
          Delete list
        </h3>
      </Button>
    </header>
  );
}
TodoListHeader.propTypes = {
  date: PropTypes.date,
};

function AddTodo() {
  return (
    <li className="mt-12 flex items-center justify-center">
      <Button
        className="flex items-center justify-center space-x-2 rounded-xl
        py-2 pl-6 pr-8 font-semibold tracking-tight text-slate-600
        hover:bg-pink-50 hover:text-rose-600"
      >
        <AddIcon className="h-8 w-8 fill-rose-500" />
        ADD TO-DO
      </Button>
    </li>
  );
}
