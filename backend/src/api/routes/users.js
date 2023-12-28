import Router from "express-promise-router";

import { LOGIN_SCHEMA, REGISTER_SCHEMA } from "../schemas/authn-schema.js";
import { signUpUser, loginUser, logoutUser } from "../controllers/users.js";
import {
  validateUserSignUp,
  validateUserLogin,
} from "#middlewares/validation.js";

const users = Router();

users.post("/signup", validateUserSignUp(REGISTER_SCHEMA), signUpUser());

users.post("/login", validateUserLogin(LOGIN_SCHEMA), loginUser());

users.get("/logout", logoutUser());

export default users;
