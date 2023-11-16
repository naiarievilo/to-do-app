import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

import { AppIcon } from "@/assets/index.js";

export function AppLogo({ appName, appIcon }) {
  return (
    <Link to={`/`} className="flex items-center">
      <AppIcon
        className={`mr-1 h-10 w-10 select-none fill-blue-600 3xl:h-20 3xl:w-20
4xl:h-32 4xl:w-32 ${appIcon}`}
      />
      <h2
        className={`my-auto select-none font-sans text-3xl
font-semibold tracking-tight 3xl:text-5xl 4xl:text-7xl ${appName}`}
      >
        TODO
      </h2>
    </Link>
  );
}
AppLogo.propTypes = {
  appName: PropTypes.string,
  appIcon: PropTypes.string,
};
