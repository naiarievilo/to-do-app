import { useState } from "react";
import { PropTypes } from "prop-types";

import { TodoList } from "@/features/todos/index.js";

import { createTodo, updateTodo, deleteTodo } from "@/features/todos/index.js";

export function TodoPanel({ data }) {
  const { todolists, setTodolists } = useState(data);

  async function handleCreateTodo(listId, todo, checked) {
    let newTodo;
    try {
      newTodo = createTodo({ listId, todo, checked });
      newTodo = newTodo.data.data;
    } catch (err) {
      alert(err.message);
      return;
    }

    const newTodolists = todolists.map((todolist) => {
      if (todolist.listId !== listId) {
        return todolist;
      }

      todolist.todos.push(newTodo);
      return todolist;
    });

    setTodolists(newTodolists);
  }

  async function handleUpdateTodo(listId, todoId, todo, checked) {
    const updatedTodo = { listId, todoId, todo, checked };
    try {
      updateTodo(updatedTodo);
    } catch (err) {
      alert(err.message);
      return;
    }

    const newTodolists = todolists.map((todolist) => {
      if (todolist.listId !== listId) {
        return todolist;
      }

      for (let todo of todolist.todos) {
        if (todo.todoId === updatedTodo.todoId) {
          todo = { todoId, todo, checked } = updatedTodo;
        }
      }
      return todolist;
    });

    setTodolists(newTodolists);
  }

  async function handleDeleteTodo(listId, todoId) {
    try {
      deleteTodo({ listId, todoId });
    } catch (err) {
      alert(err.message);
    }

    const newTodoLists = todolists.map((todolist) => {
      if (todolist.listId !== listId) {
        return todolist;
      }

      const newListTodos = todolist.todos.filter(
        (todo) => todo.todoId !== todoId,
      );

      todolist.todos = newListTodos;
      return todolist;
    });

    setTodolists(newTodoLists);
  }

  return (
    <ul className="flex h-full w-full grow flex-col">
      {todolists.map((todolist) => (
        <TodoList
          key={todolist.listId}
          listId={todolist.listId}
          listDate={new Date(todolist.listDate)}
          todos={todolist.todos}
          handleCreateTodo={handleCreateTodo}
          handleUpdateTodo={handleUpdateTodo}
          handleDeleteTodo={handleDeleteTodo}
        />
      ))}
    </ul>
  );
}
TodoPanel.propTypes = {
  data: PropTypes.array,
};
