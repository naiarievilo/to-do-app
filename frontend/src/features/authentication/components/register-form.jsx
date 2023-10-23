import { Form } from "react-router-dom";

import { FormButton } from "./form-button.jsx";
import { FormContainer } from "../layout/form-container.jsx";
import { FormField } from "./form-field.jsx";
import { FormTitle } from "./form-title.jsx";
import { FormNote } from "./form-note.jsx";

export function RegisterForm() {
  return (
    <FormContainer>
      <FormTitle title="Sign up to TODO" />
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
          inputUtils="mb-0.5"
        />
        <FormField
          identifier="confirmPassword"
          label="Confirm password"
          isRequired={true}
          type="password"
        />
        <FormButton label="Sign up" />
      </Form>
      <FormNote
        note="Already have an account?"
        link={`/login/`}
        linkValue="Sign In"
      />
    </FormContainer>
  );
}
