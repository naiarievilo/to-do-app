import PropTypes from "prop-types";

export function FormContainer({ children }) {
  return (
    <div className="container mx-auto flex flex-col items-center space-y-4 px-6 py-8">
      {children}
    </div>
  );
}
FormContainer.propTypes = {
  children: PropTypes.func,
};
