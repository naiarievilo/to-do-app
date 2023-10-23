import { Outlet } from "react-router-dom";

import { AppHeader } from "@/shared/ui/index.js";
import { TodoMenu } from "@/features/todos/index.js";

export function Home() {
  return (
    <>
      <AppHeader githubLogo="stroke-slate-800" />
      <div className="container mx-auto my-16 flex max-w-7xl">
        <TodoMenu />
        <main className="flex grow flex-col">
          <Outlet />
        </main>
      </div>
    </>
  );
}
