import { Outlet } from "react-router-dom";

import { Navbar } from "@layout/navbar.jsx";

export function Root() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
