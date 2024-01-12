import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
  Error,
  Home,
  HomeIndex,
  Root,
  RootIndex,
  Today,
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
