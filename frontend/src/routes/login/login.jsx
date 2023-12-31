import { useLocation } from "react-router-dom";

import { AuthBackground, LogInForm } from "@/features/authentication/index.js";
import { AppHeader } from "@/ui/app-header.jsx";
import { loginRequired } from "@/lib/utils.js";

export function Login() {
  const route = useLocation().pathname;
  loginRequired(route);

  return (
    <>
      <AuthBackground />
      <main className="min-w-screen flex min-h-screen flex-col">
        <AppHeader appName="text-slate-100" />
        <LogInForm />
      </main>
    </>
  );
}
