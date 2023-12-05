import { useEffect, useState } from "react";
import { PropTypes } from "prop-types";

import { Checkbox } from "@/ui/checkbox.jsx";
import { Input } from "@/ui/input.jsx";

export function AddTodo({ id }) {
  const [nextTodo, setNextTodo] = useState(null);
  const [checked, setChecked] = useState(false);

  function handleInputChange(event) {
    if (event.currentTarget.value.length === 0) {
      setChecked(false);
    }
    setNextTodo(event.currentTarget.value);
  }

  function handleCheckChange() {
    setChecked(!checked);
  }

  useEffect(() => {
    let nextTodoRef = document.getElementById(id);
    nextTodoRef.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        setNextTodo("");
        nextTodoRef.blur();
      } else if (e.key === "Enter") {
        nextTodoRef.blur();
      }
    });

    return () => nextTodoRef.removeEventListener;
  });

  return (
    <li
      className="my-2 flex items-center space-x-1 rounded-md bg-slate-100/90
      py-2 pl-4 hover:bg-slate-200/40"
    >
      <Checkbox
        checked={checked}
        disabled={nextTodo ? false : true}
        onClick={handleCheckChange}
      />
      <Input
        id={id}
        className="text-md border-none bg-transparent p-4 outline-transparent
        ring-offset-transparent placeholder:italic placeholder:tracking-wide
        placeholder:text-slate-500 focus-visible:ring-transparent"
        placeholder="My next to-do is..."
        value={nextTodo}
        onChange={handleInputChange}
      />
      <Legend isEmpty={nextTodo ? false : true} />
    </li>
  );
}
AddTodo.propTypes = {
  id: PropTypes.date,
};

function Legend({ isEmpty }) {
  if (isEmpty) {
    return;
  }

  return (
    <div
      className="w-80 flex space-x-3 items-center justify-center text-slate-500"
    >
      <small>
        <kbd
          className="bg-slate-50 border-[1px] border-slate-400/40 p-1 rounded-md
          text-xs text-slate-500 mr-1 font-semibold shadow-sm"
        >
          Enter
        </kbd>
        Add to-do
      </small>
      <small>
        <kbd
          className="bg-slate-50 border-[1px] border-slate-400/50 p-1 rounded-md
          text-xs text-slate-500 mr-1 font-semibold shadow-sm"
        >
          Esc

        </kbd>
        Cancel
      </small>
    </div>
  );
}
Legend.propTypes = {
  isEmpty: PropTypes.bool
};
