import PropTypes from "prop-types";

export function FormTitle({ title }) {
  return (
    <header>
      <h1
        className="mx-2 my-4 block text-center font-sans text-3xl
        font-semibold tracking-tight xs:text-4xl"
      >
        {title}
      </h1>
    </header>
  );
}
FormTitle.propTypes = {
  title: PropTypes.string,
};
