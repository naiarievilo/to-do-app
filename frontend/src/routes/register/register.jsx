import {
  AuthBackground,
  RegisterForm,
} from "@/features/authentication/index.js";

import { AppHeader } from "@/ui/app-header.jsx";

export function Register() {
  return (
    <>
      <AuthBackground />
      <main className="min-w-screen flex min-h-screen flex-col">
        <AppHeader appName="text-slate-100" />
        <RegisterForm />
      </main>
    </>
  );
}
