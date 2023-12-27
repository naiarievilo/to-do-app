import validator from "validator";

import { db } from "#db";

const { escape, normalizeEmail } = validator;

export function validateUserSignUp(userCreationSchema) {
  return async (req, res, next) => {
    const { email, password, confirm_password } = req.body;

    try {
      userCreationSchema.validate({
        email: email,
        password: password,
        confirm_password: confirm_password,
      });
    } catch (err) {
      console.err(err);
      res.status(400).json({});
    }

    try {
      const hasUser = await db.oneOrNone(
        "SELECT * FROM users WHERE email = $1",
        [email],
      );
      hasUser && res.status(400).json({});
    } catch (err) {
      console.error(err);
      res.status(400).json({});
    }

    req.body.email = normalizeEmail(escape(email));
    req.body.password = escape(password);

    next();
  };
}

export function validateUserLogin(userLoginSchema) {
  return (req, res, next) => {
    const { email, password } = req.body;

    try {
      userLoginSchema.validate({
        email: email,
        password: password,
      });
    } catch (err) {
      console.error(err);
      res.status(400).json({});
    }

    req.body.email = normalizeEmail(escape(email));
    req.body.password = escape(password);

    next();
  };
}
