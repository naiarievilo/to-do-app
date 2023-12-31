import { Link, useLocation } from "react-router-dom";
import { PropTypes } from "prop-types";

import {
  TacticIcon,
  ViewDayIcon,
  ViewWeekIcon,
  ViewMonthIcon,
} from "@/assets/index.js";
import { loginRequired } from "@/lib/utils.js";

export function HomeIndex() {
  const route = useLocation().pathname;
  loginRequired(route);

  return (
    <section className="flex h-full w-full flex-col items-center justify-center">
      <header className="flex items-center justify-center space-x-8">
        <TacticIcon className="h-24 w-24 fill-blue-500" />
        <p className="text-5xl font-medium tracking-tight text-slate-700">
          Keep track of your days
        </p>
      </header>
      <nav className="mt-12">
        <ul className="flex flex-col items-start justify-start space-y-10">
          <TodoPanelButton
            button="bg-blue-500 hover:bg-blue-600"
            labelClass="text-slate-50"
            labelName="Check daily to-dos"
            to="today/"
          >
            <ViewDayIcon className="h-8 w-8 fill-slate-50" />
          </TodoPanelButton>
          <TodoPanelButton
            button="group border-2 border-blue-500 hover:border-blue-600"
            labelClass="text-blue-500 group-hover:text-blue-600"
            labelName="View to-dos for the week"
            to="week/"
          >
            <ViewWeekIcon
              className="transtition-all h-8 w-8 fill-blue-500
              duration-200 group-hover:fill-blue-600"
            />
          </TodoPanelButton>
          <TodoPanelButton
            button="group shadow-none"
            labelClass="text-slate-700 group-hover:text-blue-500"
            labelName="Look upcoming to-dos"
            to="upcoming/"
          >
            <ViewMonthIcon
              className="h-8 w-8 fill-slate-600 transition-all
              duration-200 group-hover:fill-blue-500"
            />
          </TodoPanelButton>
        </ul>
      </nav>
    </section>
  );
}

function TodoPanelButton({ button, children, labelClass, labelName, to }) {
  return (
    <li className="w-full">
      <Link
        className={`flex w-full items-center justify-start space-x-4 rounded-2xl
        px-12 py-4 shadow-sm transition-all duration-200 ${button}`}
        to={to}
      >
        {children}
        <h3 className={`text-2xl transition-all duration-200 ${labelClass}`}>
          {labelName}
        </h3>
      </Link>
    </li>
  );
}
TodoPanelButton.propTypes = {
  button: PropTypes.string,
  children: PropTypes.func,
  labelName: PropTypes.string,
  labelClass: PropTypes.string,
  to: PropTypes.string,
};
