import PropTypes from "prop-types";

export function FormField({
  identifier,
  label,
  isRequired = false,
  labelUtils,
  type,
  value,
  onChange,
  inputUtils,
}) {
  return (
    <>
      <label
        htmlFor={identifier}
        className={`block ${labelUtils}
        ${
          isRequired && `after:ml-0.5 after:text-pink-500 after:content-['*']`
        }`}
      >
        {label}
      </label>
      <input
        id={identifier}
        name={identifier}
        type={type}
        value={value}
        onChange={onChange}
        className={`text-md mb-3 mt-1 block w-full rounded-md border border-slate-300
        bg-white px-3 py-2 placeholder-slate-400 shadow-md invalid:border-pink-500
        invalid:text-pink-600 focus:border-sky-400 focus:outline-none focus:ring-1
        focus:ring-sky-400 focus:invalid:border-pink-500 focus:invalid:ring-pink-500
        disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500
        disabled:shadow-none ${inputUtils}`}
      />
    </>
  );
}
FormField.propTypes = {
  identifier: PropTypes.string,
  isRequired: PropTypes.bool,
  label: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  labelUtils: PropTypes.string,
  inputUtils: PropTypes.string,
};
