import { Router } from "express";

import login from "./login.js";
import register from "./register.js";

const API_ROUTES = {
  "/login": login,
  "/register": register,
};

const router = Router();

for (let route in API_ROUTES) {
  router.use(route, API_ROUTES[route]);
}

export default router;
