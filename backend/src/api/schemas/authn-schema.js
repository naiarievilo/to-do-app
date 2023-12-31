import Joi from "joi";

const FIELDS = {
  email: Joi.string()
    .email()
    .required(),
  password: Joi.string().required(),
};

export const LOGIN_SCHEMA = Joi.object({
  ...FIELDS,
});

export const REGISTER_SCHEMA = Joi.object({
  ...FIELDS,
  confirm_password: Joi.ref("password"),
});
