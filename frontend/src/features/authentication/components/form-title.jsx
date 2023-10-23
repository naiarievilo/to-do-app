import PropTypes from "prop-types";

export function FormTitle({ title }) {
  return (
    <header>
      <h1
        className="xs:text-4xl mx-2 my-4 block text-center font-sans
        text-3xl font-semibold tracking-tight"
      >
        {title}
      </h1>
    </header>
  );
}
FormTitle.propTypes = {
  title: PropTypes.string,
};
