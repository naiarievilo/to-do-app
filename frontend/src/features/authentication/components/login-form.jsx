import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";

import { Button } from "@/ui/button.jsx";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/ui/form.jsx";
import { Input } from "@/ui/input.jsx";
import { ErrorMessage } from "./error-message.jsx";

import { loginSchema } from "../schemas/authn.js";
import { logInUser } from "../api/users.js";
import { redirect } from "@/lib/utils.js";

export function LogInForm() {
  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      confirm_password: "",
    },
  });
  const [error, setError] = useState(null);

  async function onSubmit(formData) {
    try {
      await logInUser(formData);
      localStorage.setItem("session", "true");
      return redirect("/home");
    } catch (err) {
      setError(err.response.data.error.message);
    }
  }

  return (
    <>
      {error && <ErrorMessage message={error} />}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col justify-center space-y-4"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel required={true}>Email</FormLabel>
                <FormControl>
                  <Input type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel required={true}>Password</FormLabel>
                <FormControl>
                  <Input type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            size="lg"
            className="bg-blue-600 hover:bg-blue-700"
          >
            Log In
          </Button>
        </form>
      </Form>
    </>
  );
}
