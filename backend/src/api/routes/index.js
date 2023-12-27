import users from "./users.js";
import todoLists from "./todolists.js";
import todos from "./todos.js";

const apiRoutes = {
  "/users": users,
  "/todolists": todoLists,
  "/todos": todos,
};

export const mountApiRoutes = (app) => {
  for (let route in apiRoutes) {
    app.use(route, apiRoutes[route]);
  }

  return apiRoutes;
};
