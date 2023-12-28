import validator from "validator";

const { escape, normalizeEmail } = validator;

export function validateUserSignUp(signupSchema) {
  return async (req, res, next) => {
    const { email, password, confirm_password } = req.body;

    try {
      await signupSchema.validateAsync({
        email: email,
        password: password,
        confirm_password: confirm_password,
      });
    } catch (err) {
      console.error(err);
      return res.status(400).json({
        error: {
          name: err.name,
          message: err.message,
        },
      });
    }

    req.body.email = normalizeEmail(escape(email));
    req.body.password = escape(password);

    next();
  };
}

export function validateUserLogin(loginSchema) {
  return async (req, res, next) => {
    const { email, password } = req.body;

    try {
      await loginSchema.validateAsync({
        email: email,
        password: password,
      });
    } catch (err) {
      console.error(err);
      return res.status(400).json({
        error: {
          name: err.name,
          message: err.message,
        },
      });
    }

    req.body.email = normalizeEmail(escape(email));
    req.body.password = escape(password);

    next();
  };
}
