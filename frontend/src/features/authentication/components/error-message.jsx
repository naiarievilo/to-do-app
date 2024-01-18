import { PropTypes } from "prop-types";

export function ErrorMessage({ message }) {
  return (
    <small className="font-medium tracking-wide text-rose-500">{message}</small>
  );
}
ErrorMessage.propTypes = {
  message: PropTypes.string,
};
