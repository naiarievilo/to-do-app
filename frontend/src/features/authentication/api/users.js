import axios from "axios";

export async function signUpUser(formData) {
  return await axios.post("/users/signup", formData);
}

export async function logInUser(formData) {
  return await axios.post("/users/login", formData);
}

export async function logOutUser() {
  return await axios.get("/users/logout");
}
