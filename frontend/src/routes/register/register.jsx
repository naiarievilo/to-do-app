import {
  AuthBackground,
  RegisterForm,
} from "@features/authentication/index.js";

import { AppHeader, MainContent } from "@layout/index.js";

export function Register() {
  return (
    <>
      <AuthBackground />
      <MainContent classes="min-h-screen min-w-screen flex flex-col">
        <AppHeader
          appLogo="stroke-slate-100"
          appName="text-slate-100"
          githubLogo="stroke-slate-100 fill-slate-100"
        />
        <RegisterForm />
      </MainContent>
    </>
  );
}
