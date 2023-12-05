import cors from "cors";
import express from "express";
import helmet from "helmet";

import api from "./api/routes/index.js";

function buildApp() {
  const app = express();

  // Middlewares
  // HTTP-related
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  // Security-related
  app.use(cors());
  app.use(helmet());

  // API routes
  app.use('/api', api);

  return app;
}

export default buildApp();
