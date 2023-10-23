import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

import { AppLogo, GithubLogo } from "@/assets/index.js";

export function AppHeader({ header, appLogo, appName, githubLogo }) {
  return (
    <header
      className={`align-center 4xl:mx-24 4xl:my-20 mx-8 my-8 flex
      items-center justify-between ${header}`}
    >
      <Link to={`/`} className="flex">
        <AppLogo
          classes={`w-10 h-10 select-none mr-1 3xl:w-20 3xl:h-20 4xl:w-32
          4xl:h-32 fill-rose-500 ${appLogo}`}
        />
        <h2
          to={`/`}
          className={`3xl:text-5xl 4xl:text-7xl my-auto select-none
          font-sans text-3xl font-semibold tracking-tight ${appName}`}
        >
          TODO
        </h2>
      </Link>
      <GithubLogo
        container="my-auto transition-all hover:scale-125 duration-200
        ease-in-out"
        logo={`w-6 h-6 my-auto sm:w-7 sm:h-7 relative top-0.5 3xl:w-11 3xl:h-11
        4xl:w-20 4xl:h-20 ${githubLogo}`}
      />
    </header>
  );
}
AppHeader.propTypes = {
  appLogo: PropTypes.string,
  appName: PropTypes.string,
  githubLogo: PropTypes.string,
  header: PropTypes.string,
};
