import cookieSession from "cookie-session";
import cors from "cors";
import express from "express";
import helmet from "helmet";

import { mountApiRoutes } from "#api";

function buildApp() {
  const app = express();

  // Middlewares
  // HTTP-related
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  // Security-related
  app.use(cors());
  app.use(helmet());
  app.use(
    cookieSession({
      name: "session",
      keys: [process.env.COOKIE_SECRET],
      maxAge: process.env.COOKIE_EXPIRES_IN,
      sameSite: "strict",
      httpOnly: true,
      signed: true,
    }),
  );

  // API routes
  mountApiRoutes(app);

  return app;
}

export default buildApp();
