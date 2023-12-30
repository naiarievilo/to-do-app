import axios from "axios";

export async function signUpUser(formData) {
  const response = await axios.post("/users/signup", formData);
  return response;
}

export async function loginUser(formData) {
  const response = await axios.post("/users/login", formData);
  return response;
}

export async function logoutUser() {
  const response = await axios.get("/users/logout");
  return response;
}
