import { PropTypes } from "prop-types";

import { TodoItem } from "./todo-item.jsx";

export function Todo({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <TodoItem />
      ))}
    </ul>
  );
}
Todo.propTypes = {
  items: PropTypes.string,
};
