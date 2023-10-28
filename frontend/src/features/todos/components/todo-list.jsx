import { PropTypes } from "prop-types";

import { AddIcon } from "@/assets/index.js";
import { Button } from "@/ui/button.jsx";
import { Separator } from "@/ui/separator.jsx";
import { Todo } from "./todo.jsx";

export function TodoList({ date, todos }) {
  const dateFormatted = date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <section
      className="mb-12 mt-4 flex flex-col rounded-3xl border-2 border-slate-100
      px-12 py-8 shadow-sm"
    >
      <header className="flex justify-between">
        <h2 className="text-2xl font-medium tracking-tight">{dateFormatted}</h2>
      </header>
      <Separator className="my-4" />
      <ul className="flex flex-col rounded-xl">
        {todos.map((todo) => (
          <Todo key={todo.id} data={todo.data} isChecked={todo.checked} />
        ))}
        <li className="mt-4 flex items-center justify-center">
          <Button
            className="flex items-center justify-center space-x-2 rounded-xl py-2 pl-6
            pr-8 font-semibold tracking-tight text-slate-600
            hover:bg-pink-50 hover:text-rose-600"
          >
            <AddIcon className="h-8 w-8 fill-rose-500" />
            ADD TO-DO
          </Button>
        </li>
      </ul>
    </section>
  );
}
TodoList.propTypes = {
  date: PropTypes.date,
  todos: PropTypes.array,
};
