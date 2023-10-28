import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

import {
  CalendarIcon,
  TodayIcon,
  UpcomingIcon,
  WeekIcon,
} from "@/assets/index.js";

export function TodoMenu({ container }) {
  return (
    <aside className={container}>
      <nav className="w-64 rounded-xl px-12 py-8">
        <header className="mb-4">
          <h2 className="text-xl font-semibold text-rose-500">CALENDAR</h2>
        </header>
        <ul className="flex flex-col space-y-2 text-slate-500">
          <li
            className="rounded-xl py-2 pl-2 pr-6 transition-all hover:bg-pink-50
            hover:text-rose-600 active:bg-pink-100"
          >
            <Link to={`/home/`} className="flex items-center">
              <CalendarIcon className="mr-1 h-6 w-6 select-none fill-rose-400" />
              <h3 className="text-xl">All</h3>
            </Link>
          </li>
          <li
            className="rounded-xl py-2 pl-2 pr-6 transition-all hover:bg-teal-50
            hover:text-teal-600 active:bg-teal-100"
          >
            <Link to={`today/`} className="flex items-center">
              <TodayIcon className="m-1 h-6 w-6 select-none fill-teal-400" />
              <h3 className="text-xl">Today</h3>
            </Link>
          </li>
          <li
            className="rounded-xl py-2 pl-2 pr-6 transition-all hover:bg-blue-50
            hover:text-blue-500 active:bg-blue-100"
          >
            <Link to={`week/`} className="flex items-center">
              <WeekIcon className="m-1 h-6 w-6 select-none fill-blue-400" />
              <h3 className="text-xl">This week</h3>
            </Link>
          </li>
          <li
            className="rounded-xl py-2 pl-2 pr-6 transition-all
            hover:bg-purple-50 hover:text-purple-500 active:bg-purple-100"
          >
            <Link to={`upcoming/`} className="flex items-center">
              <UpcomingIcon className="m-1 h-6 w-6 select-none fill-purple-400" />
              <h3 className="text-xl">Upcoming</h3>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
TodoMenu.propTypes = {
  container: PropTypes.string,
};
