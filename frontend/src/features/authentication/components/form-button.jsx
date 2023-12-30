import PropTypes from "prop-types";

export function FormButton({ label }) {
  return (
    <button
      type="submit"
      className="mt-4 w-full self-center rounded-lg bg-blue-500 px-4 py-2
      text-lg text-white shadow-sm hover:bg-blue-600"
    >
      {label}
    </button>
  );
}
FormButton.propTypes = {
  label: PropTypes.string,
};
