import { redirect } from "react-router-dom";
import { useState } from "react";

import { FormButton } from "./form-button.jsx";
import { FormContainer } from "../layout/form-container.jsx";
import { FormField } from "./form-field.jsx";
import { FormNote } from "./form-note.jsx";

import { signUpUser } from "../api/users.js";

export function RegisterForm() {
  const { email, setEmail } = useState("");
  const { password, setPassword } = useState("");
  const { confPassword, setConfPassword } = useState("");
  const { error, setError } = useState(null);

  async function handleSubmit() {
    const formData = {
      email: email,
      password: password,
      confirm_password: confPassword
    };

    const response = await signUpUser(formData);
    if (response?.error) {
      setError(response.error);
      return;
    }
    
    localStorage.setItem("session", "true");
    return redirect("/home");
  }

  function handleInputChange(event, setter) {
    event.stopPropagation();
    setter(event.value);
  }

  return (
    <FormContainer>
      <form onSubmit={handleSubmit} className="flex w-9/12 flex-col">
        {error &&
          <small className="text-rose-500">
            error.message
          </small>
        }
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
          inputUtils="mb-0.5"
          value={password}
          onChange={(event) => handleInputChange(event, setPassword)}
        />
        <FormField
          identifier="confirm_password"
          label="Confirm password"
          isRequired={true}
          type="password"
          value={confPassword}
          onChange={(event) => handleInputChange(event, setConfPassword)}
        />
        <FormButton label="Sign Up" />
      </form>
      <FormNote
        note="Already have an account?"
        link={`/login/`}
        linkValue="Sign In"
      />
    </FormContainer>
  );
}
