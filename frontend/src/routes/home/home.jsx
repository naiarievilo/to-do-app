import { Outlet } from "react-router-dom";

import { AppHeader } from "@/ui/app-header.jsx";
import { TodoMenu } from "@/features/todos/index.js";

export function Home() {
  return (
    <div className="flex h-full flex-col">
      <AppHeader
        header="bg-blue-500"
        appIcon="fill-slate-50"
        appName="text-slate-50"
      />
      <main className="max-w-screen flex h-full max-h-screen overflow-clip">
        <TodoMenu />
        <Outlet />
      </main>
    </div>
  );
}
