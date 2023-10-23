import {
  AuthBackground,
  RegisterForm,
} from "@/features/authentication/index.js";

import { AppHeader } from "@/shared/ui/index.js";

export function Register() {
  return (
    <>
      <AuthBackground />
      <main className="min-w-screen flex min-h-screen flex-col">
        <AppHeader
          appName="text-slate-100"
          githubLogo="stroke-slate-100 fill-slate-100"
        />
        <RegisterForm />
      </main>
    </>
  );
}
