import { PropTypes } from "prop-types";
import { useRef, useEffect, useState } from "react";

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

export function Todo({ todoId, data, isChecked, onDeleteTodo, onUpdateTodo }) {
  const [todo, setTodo] = useState(data);
  const [checked, setChecked] = useState(isChecked);
  const inputRef = useRef(null);

  function handleInputChange(e) {
    setTodo(e.currentTarget.value);
  }

  function handleCheckChange() {
    setChecked(!checked);
  }

  function handleKeyDown(e) {
    if (e.key === "Escape") {
      inputRef.current.blur();
    }
  }

  useEffect(() => {
    let ignore = false;

    if (!ignore) {
      onUpdateTodo(todoId, todo, checked);
    }

    return () => (ignore = true);
  }, [todoId, todo, checked, onUpdateTodo]);

  return (
    <li
      className="translate-all flex h-12 items-center space-x-1 rounded-md
      p-4 duration-200 hover:bg-slate-100/90 my-2"
    >
      <Checkbox className="relative top-0.5" checked={checked} onClick={handleCheckChange} />
      <Input
        ref={inputRef}
        id={todoId}
        className={`text-md border-none bg-transparent outline-transparent
        ring-offset-transparent focus-visible:ring-transparent
        ${checked ? "text-slate-400 line-through" : ""}`}
        value={todo}
        onChange={handleInputChange}
        autocomplete="off"
        onKeyDown={handleKeyDown}
      />
      <ul className="flex grow items-center justify-end space-x-4">
        <li className="flex items-center">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  size="icon"
                  className="flex items-center rounded-full bg-transparent
                  shadow-none hover:bg-slate-200 active:bg-slate-300/90"
                  onClick={() => onDeleteTodo(todoId)}
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
  todoId: PropTypes.number,
  data: PropTypes.string,
  isChecked: PropTypes.bool,
  onDeleteTodo: PropTypes.func,
  onUpdateTodo: PropTypes.func,
};
