import { PropTypes } from "prop-types";

import { Separator } from "@/ui/separator.jsx";

import { AddTodo } from "./add-todo.jsx";
import { Todo } from "./todo.jsx";

export function TodoList({
  listId,
  listDate,
  todos,
  handleCreateTodo,
  handleUpdateTodo,
  handleDeleteTodo,
}) {
  return (
    <section className="mb-12 mt-4 flex w-full flex-col rounded-3xl px-12 pb-16 pt-4">
      <TodoListHeader date={listDate} />
      <Separator className="bg-slate-400" />
      <ul className="my-4 flex flex-col rounded-xl">
        {todos.map((todo) => (
          <>
            <Todo
              key={todo.todoId}
              id={todo.todoId}
              listId={listId}
              todoId={todo.todoId}
              data={todo.todo}
              isChecked={todo.checked}
              handleUpdateTodo={handleUpdateTodo}
              handleDeleteTodo={handleDeleteTodo}
            />
            <Separator className="my-2" />
          </>
        ))}
        <AddTodo id={listId} listId={listId} handleCreateTodo={handleCreateTodo} />
      </ul>
    </section>
  );
}
TodoList.propTypes = {
  listDate: PropTypes.date,
  listId: PropTypes.number,
  todos: PropTypes.array,
  handleCreateTodo: PropTypes.func,
  handleUpdateTodo: PropTypes.func,
  handleDeleteTodo: PropTypes.func,
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
