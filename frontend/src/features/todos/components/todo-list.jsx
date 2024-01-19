import axios from "axios";
import { PropTypes } from "prop-types";
import { useState } from "react";

import { Separator } from "@/ui/separator.jsx";

import { AddTodo } from "./add-todo.jsx";
import { Todo } from "./todo.jsx";

export function TodoList({ listId, listDate, listTodos }) {
  const [todos, setTodos] = useState(listTodos);

  async function handleCreateTodo(listId, todo, checked) {
    const newTodo = { list_id: listId, todo: todo, checked: checked };

    try {
      const result = await axios.post("/todos/", newTodo);
      setTodos([
        ...todos,
        {
          todoId: result.data.data.id,
          todo: result.data.data.todo,
          checked: result.data.data.checked,
        },
      ]);
    } catch (err) {
      alert(err);
      console.log(err);
    }
  }

  function handleDeleteTodo(todoId) {
    try {
      axios.delete("/todos/", { data: { todo_id: todoId } });
      const newTodos = todos.filter((todo) => todo.todoId !== todoId);
      setTodos([...newTodos]);
    } catch (err) {
      alert(err);
      console.log(err);
    }
  }

  function handleUpdateTodo(todoId, todo, checked) {
    const updateTodo = {
      todo_id: todoId,
      todo: todo,
      checked: checked,
    };

    try {
      axios.put("/todos/", updateTodo);
    } catch (err) {
      alert(err);
      console.log(err);
    }
  }

  return (
    <section className="mt-4 flex flex-col rounded-3xl px-12 pb-8 pt-4">
      <TodoListHeader listDate={listDate} />
      <Separator className="bg-slate-400" />
      <ul className="flex flex-col rounded-xl">
        {todos.map((todo) => (
          <>
            <Todo
              key={todo.todoId}
              todoId={todo.todoId}
              data={todo.todo}
              isChecked={todo.checked}
              onDeleteTodo={handleDeleteTodo}
              onUpdateTodo={handleUpdateTodo}
            />
            <Separator className="my-2" />
          </>
        ))}
        <AddTodo
          listId={listId}
          listDate={listDate}
          onCreateTodo={handleCreateTodo}
        />
      </ul>
    </section>
  );
}
TodoList.propTypes = {
  listDate: PropTypes.string,
  listId: PropTypes.number,
  listTodos: PropTypes.array,
};

function TodoListHeader({ listDate }) {
  const date = new Date(listDate).toLocaleString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <header className="my-2 flex items-center justify-between rounded-2xl">
      <h2 className="text-2xl font-bold tracking-tight text-slate-700 2xl:text-3xl">
        {date}
      </h2>
    </header>
  );
}
TodoListHeader.propTypes = {
  listDate: PropTypes.string,
};
