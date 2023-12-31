import { PropTypes } from "prop-types";

import { Button } from "@/ui/button.jsx";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
} from "@/ui/dropdown-menu.jsx";
import { DeleteForeverIcon, HorDotsIcon } from "@/assets/index.js";
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
      <DropdownMenu className="rounded-full">
        <DropdownMenuTrigger>
          <Button
            size="icon"
            className="flex items-center rounded-full bg-transparent hover:bg-slate-200"
          >
            <HorDotsIcon className="h-8 w-8 fill-slate-700" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <Button
                size="sm"
                className="bg-transparent hover:bg-slate-50
                text-slate-700 p-0 m-0"
              >
                <DeleteForeverIcon className="mr-2 h-5 w-5 fill-slate-700" />
                <span className="text-md font-medium tracking-wide">Delete list</span>
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
