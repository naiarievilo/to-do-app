import { Checkbox } from "@/ui/checkbox.jsx";
import { Label } from "@/ui/label.jsx";

import { PropTypes } from "prop-types";

export function Todo({ className, data }) {
  return (
    <li
      className={`flex items-center space-x-2 rounded-md p-4
      hover:bg-blue-50/90 ${className}`}
    >
      <Checkbox id={data} />
      <Label htmlFor={data}>{data}</Label>
    </li>
  );
}
Todo.propTypes = {
  className: PropTypes.string,
  data: PropTypes.string,
};
