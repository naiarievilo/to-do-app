import { Outlet } from "react-router-dom";

import { AppHeader } from "@/ui/app-header.jsx";
import { TodoList, TodoMenu } from "@/features/todos/index.js";

export function Home() {
  const hasData = false;

  return (
    <div className="h-full flex-col">
      <AppHeader
        header="bg-rose-500"
        appIcon="fill-slate-50"
        appName="text-slate-50"
      />
      <main className="flex h-full">
        <TodoMenu />
        {(hasData)
          ?
            mockTodos.map((todoList) => (
              <TodoList
                key={todoList.date}
                date={todoList.date}
                todos={todoList.todos}
              />
            ))
          :
            <Outlet />
        }
      </main>
    </div>
  );
}

const mockTodos = [
  {
    date: new Date("October 27, 2023"),
    todos: [
      {
        id: 0,
        data: "Give Polly some crackers",
        isChecked: false,
      },
    ],
  },
  {
    date: new Date("October 28, 2023"),
    todos: [
      {
        id: 0,
        data: "Give Polly some crackers",
        isChecked: false,
      },
    ],
  },
  {
    date: new Date("October 29, 2023"),
    todos: [
      {
        id: 0,
        data: "Give Polly some crackers",
        isChecked: false,
      },
    ],
  },
];
