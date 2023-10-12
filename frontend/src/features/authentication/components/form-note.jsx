import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

export function FormNote({ link, linkValue, note }) {
  return (
    <small className="text-md mx-10 mt-4 text-center">
      {note}{" "}
      <Link
        to={link}
        className="inline-block text-blue-400 underline underline-offset-2
        hover:text-blue-500"
      >
        {linkValue}
      </Link>
    </small>
  );
}
FormNote.propTypes = {
  link: PropTypes.string,
  linkValue: PropTypes.string,
  note: PropTypes.string,
};
