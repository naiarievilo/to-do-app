import PropTypes from "prop-types";

export function FormTitle({ title }) {
  return (
    <header>
      <h1 className="my-4 block font-sans text-4xl font-semibold">
        {title}
      </h1>
    </header>
  );
}
FormTitle.propTypes = {
  title: PropTypes.string,
}
