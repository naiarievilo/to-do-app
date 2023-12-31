import { useLocation } from "react-router-dom";

import { AppHeader } from "@/ui/app-header.jsx";
import { AuthBackground, SignUpForm } from "@/features/authentication/index.js";
import { loginRequired } from "@/lib/utils.js";

export function SignUp() {
  const route = useLocation().pathname;
  loginRequired(route);

  return (
    <>
      <AuthBackground />
      <main className="min-w-screen flex min-h-screen flex-col">
        <AppHeader appName="text-slate-100" />
        <SignUpForm />
      </main>
    </>
  );
}
