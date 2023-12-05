import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

import { TodayIcon, UpcomingIcon, WeekIcon } from "@/assets/index.js";

export function TodoMenu() {
  return (
    <aside className="h-full w-72 bg-blue-100 p-4">
      <nav className="w-72 px-8 py-12">
        <section className="flex flex-col space-y-4">
          <header className="flex items-center space-y-2">
            <h2 className="text-xl font-semibold tracking-wide text-blue-500">
              CALENDAR
            </h2>
          </header>
          <ul className="flex flex-col space-y-2">
            <MenuItem label="Today" to="today/">
              <TodayIcon className="mr-2 h-5 w-5 select-none" />
            </MenuItem>
            <MenuItem label="This week" to="week/">
              <WeekIcon className="mr-2 h-5 w-5 select-none" />
            </MenuItem>
            <MenuItem label="Upcoming" to="upcoming/">
              <UpcomingIcon className="mr-2 h-5 w-5 select-none" />
            </MenuItem>
          </ul>
        </section>
      </nav>
    </aside>
  );
}
TodoMenu.propTypes = {
  onChange: PropTypes.func,
};

function MenuItem({ label, children, to }) {
  return (
    <li className="rounded-xl py-2 pl-2 pr-6">
      <Link
        className="transition-color flex items-center fill-slate-600
        text-lg duration-200 hover:fill-blue-500 hover:text-blue-500"
        to={to}
      >
        {children}
        <h3>{label}</h3>
      </Link>
    </li>
  );
}
MenuItem.propTypes = {
  children: PropTypes.func,
  label: PropTypes.string,
  to: PropTypes.string,
};
