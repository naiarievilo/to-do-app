import { useEffect, useState } from "react";
import { PropTypes } from "prop-types";

import { Checkbox } from "@/ui/checkbox.jsx";
import { Input } from "@/ui/input.jsx";

export function AddTodo({ listId }) {
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
    const nextTodoRef = document.getElementById(listId);
    let ignore = false;

    nextTodoRef.addEventListener(
      "keydown",
      (e) => {
        if (e.key === "Escape") {
          setNextTodo("");
          nextTodoRef.blur();
        }

        if (e.key === "Enter" && !ignore) {
          nextTodoRef.blur();
        }
      }
    );

    return () => {
      nextTodoRef.removeEventListener;
      ignore = true;
    };
  }, [listId, nextTodo, checked]);

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
        id={listId}
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
  id: PropTypes.number,
  listId: PropTypes.number,
  handleCreateTodo: PropTypes.func,
};

function Legend({ isEmpty }) {
  if (isEmpty) {
    return;
  }

  return (
    <div className="flex w-80 items-center justify-center space-x-3 text-slate-500">
      <small>
        <kbd
          className="mr-1 rounded-md border-[1px] border-slate-400/40 bg-slate-50
          p-1 text-xs font-semibold text-slate-500 shadow-sm"
        >
          Enter
        </kbd>
        Add to-do
      </small>
      <small>
        <kbd
          className="mr-1 rounded-md border-[1px] border-slate-400/50 bg-slate-50
          p-1 text-xs font-semibold text-slate-500 shadow-sm"
        >
          Esc
        </kbd>
        Cancel
      </small>
    </div>
  );
}
Legend.propTypes = {
  isEmpty: PropTypes.bool,
};
