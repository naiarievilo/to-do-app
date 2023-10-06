import PropTypes from "prop-types";

export function MainContent({ children, classes }) {
  return <main className={`${classes}`}>{children}</main>;
}
MainContent.propTypes = {
  children: PropTypes.func,
  classes: PropTypes.string,
};
