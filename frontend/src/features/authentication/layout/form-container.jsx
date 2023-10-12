import PropTypes from "prop-types";

export function FormContainer({ children }) {
  return (
    <div
      className="mx-4 my-20 flex flex-col items-center space-y-4 rounded-3xl
      bg-slate-50 pb-12 pt-8 sm:container sm:mx-auto sm:max-w-md"
    >
      {children}
    </div>
  );
}
FormContainer.propTypes = {
  children: PropTypes.func,
};
