import { PropTypes } from "prop-types";
import { useEffect, useState } from "react";

import { Checkbox } from "@/ui/checkbox.jsx";
import { Button } from "@/ui/button.jsx";
import { DeleteIcon } from "@/assets/index.js";
import { Input } from "@/ui/input.jsx";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/ui/tooltip.jsx";

export function Todo({
  id,
  className,
  listId,
  todoId,
  data,
  isChecked,
  handleUpdateTodo,
  handleDeleteTodo,
}) {
  const [todo, setTodo] = useState(data);
  const [checked, setChecked] = useState(isChecked);

  function handleInputChange(event) {
    setTodo(event.value);
  }

  function handleCheckChange() {
    setChecked(!checked);
  }

  useEffect(() => {
    let inputRef = document.getElementById(id);
    let ignore = false;

    inputRef.addEventListener("focusout", (e) => {
      e.stopPropagation();

      if (!ignore) {
        handleUpdateTodo(listId, todoId, todo, checked);
      }
    });

    return () => {
      inputRef.removeEventListener;
      ignore = true;
    };
  }, [id, listId, todoId, todo, checked, handleUpdateTodo]);

  return (
    <li
      className={`translate-all flex h-12 items-center space-x-1 rounded-md
      p-4 duration-200 hover:bg-slate-100/90 ${className}`}
    >
      <Checkbox checked={checked} onClick={handleCheckChange} />
      <Input
        id={id}
        className={`text-md border-none bg-transparent outline-transparent
        ring-offset-transparent focus-visible:ring-transparent
        ${checked ? "text-slate-400 line-through" : ""}`}
        value={todo}
        onChange={handleInputChange}
        autocomplete="off"
      />
      <ul className="flex grow items-center justify-end space-x-4">
        <li className="flex items-center">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  className="flex items-center rounded-full"
                  onClick={() => handleDeleteTodo(listId, todoId)}
                >
                  <DeleteIcon
                    className="h-6 w-6 fill-slate-700 transition-all
                    duration-200"
                  />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Delete to-do</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </li>
      </ul>
    </li>
  );
}
Todo.propTypes = {
  className: PropTypes.string,
  id: PropTypes.number,
  listId: PropTypes.listId,
  todoId: PropTypes.number,
  data: PropTypes.string,
  isChecked: PropTypes.bool,
  handleUpdateTodo: PropTypes.func,
  handleDeleteTodo: PropTypes.func,
};
