import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

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
import { FormContainer } from "../layout/form-container.jsx";

import { loginSchema } from "../schemas/authn.js";

export function LogInForm() {
  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      confirm_password: "",
    },
  });

  return (
    <FormContainer>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col justify-center m-8 w-10/12 space-y-6"
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
                  <Input type="password" min={12} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            size="lg"
          >
            Log In
          </Button>
        </form>
      </Form>
    </FormContainer>
  );
}

function onSubmit(formData) {
  console.log(formData);
}
