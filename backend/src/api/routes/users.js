import Router from "express-promise-router";

import { createUser, checkUser } from "../controllers/users.js";
import { LOGIN_SCHEMA, REGISTER_SCHEMA } from "../schemas/authn-schema.js";
import {
  validateUserSignUp,
  validateUserLogin,
} from "#middlewares/validation.js";

const users = Router();

users.post("/login", validateUserLogin(LOGIN_SCHEMA), checkUser());

users.post("/signup", validateUserSignUp(REGISTER_SCHEMA), createUser());

users.get("/logout");

export default users;
