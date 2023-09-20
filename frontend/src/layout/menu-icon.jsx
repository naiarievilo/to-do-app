import PropTypes from "prop-types";

export function MenuIcon({ classes, onClick }) {
  return (
    <button type="button" onClick={onClick}>
      <span className="sr-only">Navigation</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={classes}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    </button>
  );
}
MenuIcon.propTypes = {
  classes: PropTypes.string,
  onClick: PropTypes.func,
};
