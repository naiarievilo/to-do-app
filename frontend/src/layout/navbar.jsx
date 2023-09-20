import { Link } from "react-router-dom";

import { AppLogo } from "./app-logo.jsx";
import { MenuIcon } from "./menu-icon.jsx";

export function Navbar() {
  return (
    <header>
      <nav
        className="sticky top-0 w-full bg-gradient-to-r from-blue-500 to-teal-300
        px-4 py-3 shadow-md"
      >
        <ul className="container mx-auto flex max-w-4xl items-center space-x-4">
          <li>
            <AppLogo classes="w-10 h-10 stroke-white" />
          </li>
          <li>
            <Link
              to="/"
              className="block font-sans text-3xl font-semibold text-white"
            >
              To-do
            </Link>
          </li>
          <li className="grow">
            <p
              className="relative top-1 block font-sans text-sm font-semibold
              text-white max-xs:hidden"
            >
              Your go-to to-do list app.
            </p>
          </li>
          <li>
            <Link
              to="login/"
              className="pink-100 peer font-sans text-xl font-semibold
              text-white max-xs:hidden"
            >
              Log In
            </Link>
            <span
              className="block h-0.5 max-w-0 bg-red-400 pt-0.5 transition-all
              duration-300 peer-hover:max-w-full max-xs:hidden"
            ></span>
          </li>
          <li>
            <Link
              to="register/"
              className="slate-100 peer font-sans text-xl font-semibold
              text-white max-xs:hidden"
            >
              Register
            </Link>
            <span
              className="block h-0.5 max-w-0 bg-red-400 pt-0.5 transition-all
              duration-300 peer-hover:max-w-full max-xs:hidden"
            ></span>
          </li>
          <li className="xs:hidden">
            <MenuIcon classes="w-9 h-9 stroke-white" />
          </li>
        </ul>
      </nav>
    </header>
  );
}
