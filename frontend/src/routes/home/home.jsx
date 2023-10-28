import { AppHeader } from "@/ui/app-header.jsx";
import { TodoList, TodoMenu } from "@/features/todos/index.js";

export function Home() {
  return (
    <>
      <AppHeader />
      <div className="container mx-auto my-16 flex max-w-7xl">
        <TodoMenu />
        <main className="mx-auto flex w-8/12 flex-col">
          {mockTodos.map((todoList) => (
            <TodoList
              key={todoList.date}
              date={todoList.date}
              todos={todoList.todos}
            />
          ))}
        </main>
      </div>
    </>
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
