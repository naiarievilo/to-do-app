import { PropTypes } from "prop-types";

import { AddTodo } from "./add-todo.jsx";
import { Button } from "@/ui/button.jsx";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem
} from "@/ui/dropdown-menu.jsx";
import { DeleteForeverIcon, HorDotsIcon } from "@/assets/index.js";
import { Separator } from "@/ui/separator.jsx";

import { Todo } from "./todo.jsx";

export function TodoList({ date, todos }) {
  return (
    <section
      className="mx-12 mb-12 mt-4 flex flex-col rounded-3xl px-12 pb-16
      pt-4"
    >
      <TodoListHeader date={date} />
      <Separator className="bg-slate-400" />
      <ul className="my-4 flex flex-col rounded-xl">
        {todos.map((todo) => (
          <>
            <Todo
              key={todo.id}
              id={todo.id}
              data={todo.data}
              isChecked={todo.isChecked}
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
      <DropdownMenu className="rounded-full">
        <DropdownMenuTrigger>
          <Button className="flex items-center">
            <HorDotsIcon className="w-8 h-8 fill-slate-700" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <Button>
                <DeleteForeverIcon className="w-5 h-5 fill-slate-700 mr-2" />
                <span className="font-medium tracking-wide">Delete list</span>
              </Button>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}
TodoListHeader.propTypes = {
  date: PropTypes.date,
};
