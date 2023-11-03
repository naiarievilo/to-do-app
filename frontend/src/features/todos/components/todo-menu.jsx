import { PropTypes } from "prop-types";

import { Button } from "@/ui/button.jsx";
import { TodayIcon, UpcomingIcon, WeekIcon } from "@/assets/index.js";

export function TodoMenu() {
  return (
    <aside className="h-full w-72 bg-slate-200/50 p-4">
      <nav className="h-full py-12 px-8">
        <section className="flex flex-col space-y-4 h-full">
          <header className="flex items-center space-y-2">
            <h2 className="text-xl font-semibold tracking-wide text-rose-500">
              CALENDAR
            </h2>
          </header>
          <ul className="flex flex-col space-y-2">
            <MenuItem label="Today">
              <TodayIcon className="mr-2 h-6 w-6 select-none" />
            </MenuItem>
            <MenuItem label="This week">
              <WeekIcon className="mr-2 h-6 w-6 select-none" />
            </MenuItem>
            <MenuItem label="Upcoming">
              <UpcomingIcon className="mr-2 h-6 w-6 select-none" />
            </MenuItem>
          </ul>
        </section>
      </nav>
    </aside>
  );
}
TodoMenu.propTypes = {
  container: PropTypes.string,
};

function MenuItem({ label, children }) {
  return (
    <li className="rounded-xl py-2 pl-2 pr-6">
      <Button
        className="transition-color flex items-center fill-slate-600
        text-xl duration-200 hover:fill-rose-500 hover:text-rose-500"
      >
        {children}
        <h3>{label}</h3>
      </Button>
    </li>
  );
}
MenuItem.propTypes = {
  children: PropTypes.func,
  label: PropTypes.string,
};
