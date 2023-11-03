import { Checkbox } from "@/ui/checkbox.jsx";
import { Label } from "@/ui/label.jsx";
import { PropTypes } from "prop-types";

import { Button } from "@/ui/button.jsx";
import { DeleteIcon, EditSquareIcon } from "@/assets/index.js";

export function Todo({ className, data }) {
  return (
    <li
      className={`group flex h-12 items-center space-x-2 rounded-md p-4
      hover:bg-pink-50 ${className}`}
    >
      <Checkbox id={data} />
      <Label htmlFor={data} className="grow hover:cursor-text">
        {data}
      </Label>
      <ul
        className="invisible flex items-center justify-end space-x-4
        group-hover:visible"
      >
        <li className="flex items-center">
          <Button className="flex items-center">
            <EditSquareIcon className="h-6 w-6 fill-rose-500 hover:fill-rose-600" />
          </Button>
        </li>
        <li className="flex items-center">
          <Button className="flex items-center">
            <DeleteIcon className="h-6 w-6 fill-rose-500 hover:fill-rose-600" />
          </Button>
        </li>
      </ul>
    </li>
  );
}
Todo.propTypes = {
  className: PropTypes.string,
  data: PropTypes.string,
};
