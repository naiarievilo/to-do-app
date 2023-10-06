import PropTypes from "prop-types";

export function FormButton({ label }) {
  return (
    <button
      type="submit"
      className="text-md mt-4 w-auto self-center rounded-md bg-sky-400 px-4 py-2
      font-semibold text-white shadow-sm hover:bg-sky-500"
    >
      {label}
    </button>
  );
}
FormButton.propTypes = {
  label: PropTypes.string,
};
