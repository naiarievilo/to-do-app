import { compare, hash } from "bcrypt";

import { db } from "#db";
import { createAccessToken } from "#utils/jwt.js";
import { errorObj, successObj } from "#utils/json.js";

const SALT_ROUNDS = 10;

export function signUpUser() {
  return async (req, res) => {
    const { email, password } = req.body;

    let hasUser;
    try {
      hasUser = await db.oneOrNone("SELECT * FROM users WHERE email = $1", [
        email,
      ]);
    } catch (err) {
      console.error(err);
      return res.status(400).json(errorObj(err));
    }
    if (hasUser) {
      return res.status(400).json(successObj());
    }

    let passwordHash;
    try {
      passwordHash = await hash(password, SALT_ROUNDS);
    } catch (err) {
      console.error(err);
      return res.status(500).json(errorObj(err));
    }

    try {
      const userInfo = await db.one(
        `INSERT INTO users (email, hash)
              VALUES ($1, $2)
           RETURNING id, email, hash`,
        [email, passwordHash],
      );

      req.session = createAccessToken(userInfo);
      return res.status(200).json(successObj());
    } catch (err) {
      console.error(err);
      return res.status(500).json(errorObj(err));
    }
  };
}

export function loginUser() {
  return async (req, res) => {
    const { email, password } = req.body;

    let userInfo;
    try {
      userInfo = await db.one(
        `SELECT id, email, hash 
           FROM users
          WHERE email = $1`,
        [email],
      );
      !userInfo && res.status(400).json({});
    } catch (err) {
      console.error(err);
      return res.status(400).json(errorObj(err));
    }

    try {
      const match = await compare(password, userInfo.hash);
      !match && res.sendStatus(400);
    } catch (err) {
      console.error(err);
      return res.status(400).json(errorObj());
    }

    req.session = createAccessToken(userInfo);
    return res.status(200).json(successObj());
  };
}

export function logoutUser() {
  return (req, res) => {
    try {
      req.session = null;
    } catch (err) {
      console.error(err);
      return res.status(500).json(errorObj(err));
    }

    return res.sendStatus(200);
  };
}
