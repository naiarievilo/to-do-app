import { Form } from "react-router-dom";

import { FormButton } from "./form-button.jsx";
import { FormContainer } from "./form-container.jsx";
import { FormField } from "./form-field.jsx";
import { FormTitle } from "./form-title.jsx";

export function RegisterForm() {
  return (
    <FormContainer>
      <FormTitle title="Register" />
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
          inputUtils="mb-1.5"
        />
        <FormField
          identifier="confirmPassword"
          label="Confirm password"
          isRequired={true}
          type="password"
        />
        <FormButton label="Register" />
      </Form>
    </FormContainer>
  );
}
