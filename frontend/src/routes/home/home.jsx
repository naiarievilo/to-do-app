import { AppHeader } from "@/ui/app-header.jsx";
import { TodoList, TodoMenu, TodoPanelIndex } from "@/features/todos/index.js";
import { ScrollArea, ScrollBar } from "@/ui/scroll-area.jsx";

export function Home() {
  const hasData = true;

  return (
    <div className="flex h-full flex-col overflow-hidden">
      <AppHeader
        header="bg-blue-500"
        appIcon="fill-slate-50"
        appName="text-slate-50"
      />
      <main className="max-w-screen flex max-h-screen">
        <TodoMenu />
        <ScrollArea className="h-full max-h-full w-full max-w-full overflow-y-auto">
          <ul className="flex h-full w-full flex-col">
            {hasData ? (
              mockTodos.map((todoList) => (
                <TodoList
                  key={todoList.date}
                  date={todoList.date}
                  todos={todoList.todos}
                />
              ))
            ) : (
              <TodoPanelIndex />
            )}
          </ul>
          <ScrollBar className="bg-slate-50" />
        </ScrollArea>
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
        isChecked: true,
      },
    ],
  },
  {
    date: new Date("October 28, 2023"),
    todos: [
      {
        id: 1,
        data: "Give Polly some crackers",
        isChecked: false,
      },
    ],
  },
  {
    date: new Date("October 29, 2023"),
    todos: [
      {
        id: 2,
        data: "Give Polly some crackers",
        isChecked: false,
      },
    ],
  },
  {
    date: new Date("October 30, 2023"),
    todos: [
      {
        id: 3,
        data: "Give Polly some crackers",
        isChecked: false,
      },
    ],
  },
];
