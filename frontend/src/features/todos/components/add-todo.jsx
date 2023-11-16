import { useEffect, useState } from "react";
import { PropTypes } from "prop-types";

import { Checkbox } from "@/ui/checkbox.jsx";
import { Input } from "@/ui/input.jsx";

export function AddTodo({ id }) {
  const [nextTodo, setNextTodo] = useState(null);

  function handleChange(event) {
    event.stopPropagation();
    setNextTodo(event.currentTarget.value);
  }

  useEffect(() => {
    let nextTodoRef = document.getElementById(id);
    nextTodoRef.addEventListener('keydown', e => {
      if (e.key === 'Escape' || e.key === 'Enter') {
        nextTodoRef.blur();
      }
    })
  })

  return (
    <li className="flex items-center pl-4 rounded-md py-2 space-x-1 bg-slate-100 my-2">
      <Checkbox className={`${nextTodo ? 'visible' : 'invisible'}`} />
      <Input
        id={id}
        className="text-md border-none bg-transparent p-4 placeholder:italic
        outline-transparent ring-offset-transparent focus-visible:ring-transparent
        placeholder:text-slate-500 placeholder:tracking-wide"
        placeholder="My next to-do is..."
        value={nextTodo}
        onChange={handleChange}
      />
    </li>
  );
}
AddTodo.propTypes = {
  id: PropTypes.date
}
