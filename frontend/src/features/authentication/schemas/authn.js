import * as z from "zod";

const fields = {
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email address" }),
  password: z.string().min(1, { message: "Password is required" }),
};

export const signUpSchema = z
  .object({
    ...fields,
    confirm_password: z
      .string()
      .min(1, { message: "Password confirmation is required" }),
  })
  .required()
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords don't match",
    path: ["confirm_password"],
  });

export const loginSchema = z.object({ ...fields }).required();
