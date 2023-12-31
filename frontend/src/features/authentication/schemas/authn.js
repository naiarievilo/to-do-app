import * as z from "zod";

const fields = {
  email: z.string().email({ message: "Invalid email address."}),
  password: z.string().regex(
    new RegExp("/^[\\w\\.\\W]{16,}$/"),
    "Password must be at least 16 characters."
  )
};

export const signUpSchema = z.object({
  ...fields,
  confirm_password: fields.password
})
  .required()
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords don't match.",
    path: ["confirm_password"]
  });

export const loginSchema = z.object({ ...fields }).required();
