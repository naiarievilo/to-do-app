import { PropTypes } from "prop-types";

export function TodoItem({ data }) {
  return (
    <li className="rounded-xl hover:bg-slate-50">
      <input type="checkbox" value={data} className="text-xl" />
    </li>
  );
}
TodoItem.propTypes = {
  data: PropTypes.string,
};
