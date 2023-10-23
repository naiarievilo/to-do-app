import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./main.css";
import { Error } from "@/routes/error.jsx";
import { Home, HomeIndex, Today, Week, Upcoming } from "@/routes/home/index.js";
import { Login } from "@/routes/login/login.jsx";
import { Register } from "@/routes/register/register.jsx";
import { Root, RootIndex } from "@/routes/root/index.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      { index: true, element: <RootIndex /> },
      {
        path: "login/",
        element: <Login />,
      },
      {
        path: "register/",
        element: <Register />,
      },
      {
        path: "home/",
        element: <Home />,
        children: [
          { index: true, element: <HomeIndex /> },
          {
            path: "today/",
            element: <Today />,
          },
          {
            path: "week/",
            element: <Week />,
          },
          {
            path: "upcoming/",
            element: <Upcoming />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
