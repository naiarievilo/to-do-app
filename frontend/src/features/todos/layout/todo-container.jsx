import { PropTypes } from "prop-types";

export function TodoContainer({ className, children }) {
  return <div className={className}>{children}</div>;
}
TodoContainer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.array,
};
