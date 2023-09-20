import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./main.css";
import { Error } from "@routes/error.jsx";
import { Root, RootIndex } from "@routes/root/index.js";
import { Login } from "@routes/login/index.js";
import { Register } from "@routes/register/index.js";

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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
