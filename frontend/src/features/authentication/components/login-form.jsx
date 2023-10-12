import { Form } from "react-router-dom";

import { FormButton } from "./form-button.jsx";
import { FormContainer } from "../layout/form-container.jsx";
import { FormField } from "./form-field.jsx";
import { FormNote } from "./form-note.jsx";
import { FormTitle } from "./form-title.jsx";

export function LoginForm() {
  return (
    <FormContainer>
      <FormTitle title="Sign in to TODO" />
      <Form method="post" className="flex w-9/12 flex-col">
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
        <FormButton label="Sign in" />
      </Form>
      <FormNote
        note="Don't have an account?"
        link={`/register/`}
        linkValue="Sign Up"
      />
    </FormContainer>
  );
}
