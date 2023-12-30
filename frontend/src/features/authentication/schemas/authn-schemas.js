import Joi from "joi";

const FIELDS = {
  email: Joi.string()
    .email({ minDomainSegments: 2 })
    .required(),
  password: Joi.string().pattern(new RegExp("^[\\w\\.\\W]{16,}$")).required(),
};

export const LOGIN_SCHEMA = Joi.object({
  ...FIELDS,
});

export const SIGNUP_SCHEMA = Joi.object({
  ...FIELDS,
  confirm_password: Joi.ref("password"),
});

