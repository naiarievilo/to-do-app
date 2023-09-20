import { Form, Link } from "react-router-dom";

import { FormButton } from "./form-button.jsx";
import { FormContainer } from "./form-container.jsx";
import { FormField } from "./form-field.jsx";
import { FormTitle } from "./form-title.jsx";

export function LoginForm() {
  return (
    <FormContainer>
      <FormTitle title="Log In" />
      <Form method="post" className="flex w-2/3 flex-col">
        <FormField
          identifier="email"
          label="Email"
          isRequired={true}
          type="text"
        />
        <FormField
          identifier="password"
          label="Password"
          isRequired={true}
          type="password"
        />
        <FormButton label="Log In" />
      </Form>
      <small className="text-md mt-4 font-light">
        Don&apos;t have an account?{" "}
        <Link
          to={`/register/`}
          className="text-sky-400 underline underline-offset-2
          hover:text-sky-600"
        >
          Sign up.
        </Link>
      </small>
    </FormContainer>
  );
}
