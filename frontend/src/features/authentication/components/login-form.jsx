import { useState } from "react";

import { FormButton } from "./form-button.jsx";
import { FormContainer } from "../layout/form-container.jsx";
import { FormField } from "./form-field.jsx";
import { FormNote } from "./form-note.jsx";

export function LoginForm() {
  const { email, setEmail } = useState("");
  const { password, setPassword } = useState("");

  function handleInputChange(event, setter) {
    event.stopPropagation();
    setter(event.value);
  }

  function handleSubmit() {
    alert("Submitted");
  }

  return (
    <FormContainer>
      <form onSubmit={handleSubmit} className="flex w-9/12 flex-col">
        <FormField
          identifier="email"
          label="Email"
          isRequired={true}
          type="text"
          value={email}
          onChange={(event) => handleInputChange(event, setEmail)}
        />
        <FormField
          identifier="password"
          label="Password"
          isRequired={true}
          type="password"
          value={password}
          onChange={(event) => handleInputChange(event, setPassword)}
        />
        <FormButton label="Sign in" />
      </form>
      <FormNote
        note="Don't have an account?"
        link={`/register/`}
        linkValue="Sign Up"
      />
    </FormContainer>
  );
}
