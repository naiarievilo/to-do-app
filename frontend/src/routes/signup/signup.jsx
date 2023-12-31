import { AppHeader } from "@/ui/app-header.jsx";
import {
  AuthBackground,
  SignUpForm,
} from "@/features/authentication/index.js";

export function SignUp() {
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
