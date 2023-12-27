import { compare, hash } from "bcrypt";

import { db } from "#db";
import { createAccessToken } from "#utils/jwt.js";

const SALT_ROUNDS = 10;

export function createUser() {
  return async (req, res) => {
    const { email, password } = req.body;

    let passwordHash;
    try {
      passwordHash = await hash(password, SALT_ROUNDS);
    } catch (err) {
      console.error(err);
      res.status(500).json({});
    }

    try {
      const userInfo = await db.one(
        `INSERT INTO users (email, hash)
              VALUES ($1, $2)
           RETURNING *`,
        [email, passwordHash],
      );

      req.session = createAccessToken(userInfo);
      res.status(200).json({});
    } catch (err) {
      console.error(err);
      res.status(500).json({});
    }
  };
}

export function checkUser() {
  return async (req, res) => {
    const { email, password } = req.body;

    let userInfo;
    try {
      userInfo = db.one(
        `SELECT *
         FROM users
        WHERE email = $1`,
        [email],
      );
    } catch (err) {
      console.error(err);
      res.status(400).json({});
    }

    try {
      const isCorrectPassword = await compare(password, userInfo.hash);
      !isCorrectPassword && res.status(400).json({});

      req.session = createAccessToken(userInfo);
      res.status(200).json({});
    } catch (err) {
      console.error(err);
      res.status(400).json({});
    }
  };
}

export function logout() {
  return (req, res) => {
    try {
      req.session = null;
    } catch (err) {
      console.error(err);
      res.sendStatus(500).json({});
    }

    res.sendStatus(200);
  };
}
