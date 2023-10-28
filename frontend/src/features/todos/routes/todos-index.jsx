import { PropTypes } from "prop-types";

import { AddIcon } from "@/assets/index.js";
import { TodoContainer } from "../layout/todo-container.jsx";

export function TodosIndex({ container, title, btnClass, btnName }) {
  return (
    <TodoContainer
      className={`mx-12 flex min-h-[480px] w-[800px] items-center justify-center
      rounded-2xl shadow-sm ${container}`}
    >
      <section
        className="mx-auto flex w-2/3 flex-col items-center justify-center
        space-y-16"
      >
        <h2 className="block text-center text-5xl tracking-tight text-slate-700">
          {title}
        </h2>
        <button
          className={`flex items-center rounded-2xl py-4 pl-4 pr-8 text-lg
          font-semibold text-white transition-all ${btnClass}`}
        >
          <AddIcon className="mr-1 h-9 w-9 fill-white" />
          {btnName}
        </button>
      </section>
    </TodoContainer>
  );
}
TodosIndex.propTypes = {
  container: PropTypes.string,
  title: PropTypes.string,
  btnClass: PropTypes.string,
  btnName: PropTypes.string,
};
