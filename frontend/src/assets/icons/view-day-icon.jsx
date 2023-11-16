import { PropTypes } from "prop-types";

export function ViewDayIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
      className={className}
    >
      <path
        d="M120-160v-80h720v80H120Zm0-560v-80h720v80H120Zm80 400q-33
        0-56.5-23.5T120-400v-160q0-33 23.5-56.5T200-640h560q33 0 56.5
        23.5T840-560v160q0 33-23.5
        56.5T760-320H200Zm0-80h560v-160H200v160Zm0-160v160-160Z"
      />
    </svg>
  );
}
ViewDayIcon.propTypes = {
  className: PropTypes.string,
};
