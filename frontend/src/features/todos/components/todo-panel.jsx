import { PropTypes } from "prop-types";

import { Button } from "@/ui/button.jsx";
import {
  TacticIcon,
  ViewDayIcon,
  ViewWeekIcon,
  ViewMonthIcon,
} from "@/assets/index.js";

export function TodoPanelIndex() {
  return (
    <section className="container mx-auto flex flex-col items-center justify-center">
      <header className="flex items-center justify-center space-x-8">
        <TacticIcon className="h-24 w-24 fill-rose-500" />
        <p className="text-5xl font-medium tracking-tight text-slate-700">
          Start planning your days
        </p>
      </header>
      <nav className="mt-12">
        <ul className="flex flex-col items-start justify-start space-y-10">
          <TodoPanelButton
            button="bg-rose-500 hover:bg-rose-600"
            labelClass="text-slate-50"
            labelName="Create daily to-do"
          >
            <ViewDayIcon className="h-8 w-8 fill-slate-50" />
          </TodoPanelButton>
          <TodoPanelButton
            button="group border-2 border-rose-500 hover:border-rose-600"
            labelClass="text-rose-500 group-hover:text-rose-600"
            labelName="Create weekly to-dos"
          >
            <ViewWeekIcon
              className="transtition-all h-8 w-8 fill-rose-500
              duration-200 group-hover:fill-rose-600"
            />
          </TodoPanelButton>
          <TodoPanelButton
            button="group shadow-none hover:bg-rose-50"
            labelClass="text-slate-700 group-hover:text-rose-500"
            labelName="Create upcoming to-dos"
          >
            <ViewMonthIcon
              className="h-8 w-8 fill-slate-600 transition-all
              duration-200 group-hover:fill-rose-500"
            />
          </TodoPanelButton>
        </ul>
      </nav>
    </section>
  );
}

function TodoPanelButton({ button, children, labelClass, labelName }) {
  return (
    <li className="w-full">
      <Button
        className={`flex w-full items-center justify-start space-x-4 rounded-2xl px-12
        py-4 shadow-sm transition-all duration-200 ${button}`}
      >
        {children}
        <h3 className={`text-2xl transition-all duration-200 ${labelClass}`}>
          {labelName}
        </h3>
      </Button>
    </li>
  );
}
TodoPanelButton.propTypes = {
  button: PropTypes.string,
  children: PropTypes.func,
  labelName: PropTypes.string,
  labelClass: PropTypes.string,
};
