import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
  Error,
  Home,
  HomeIndex,
  Login,
  SignUp,
  Root,
  RootIndex,
  Today,
  Upcoming,
  Week,
} from "@/routes/index.js";

import "./main.css";

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
        path: "signup/",
        element: <SignUp />,
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
