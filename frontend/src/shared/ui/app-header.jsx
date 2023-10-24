import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

import { AppLogo, GithubLogo } from "@/assets/index.js";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/shared/ui/index.js";

export function AppHeader({ appLogo, appName, githubLogo }) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink>
            <Link to={`/`} className="flex">
              <AppLogo
                classes={`w-10 h-10 select-none mr-1 3xl:w-20 3xl:h-20 4xl:w-32
                4xl:h-32 fill-rose-500 ${appLogo}`}
              />
              <h2
                className={`3xl:text-5xl 4xl:text-7xl my-auto select-none
                font-sans text-3xl font-semibold tracking-tight ${appName}`}
              >
                TODO
              </h2>
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink>
            <Link to={`https://github.com/naiarievilo/to-do-app`}>
              <GithubLogo
                container="my-auto transition-all hover:scale-125 duration-200
                ease-in-out"
                logo={`w-6 h-6 my-auto sm:w-7 sm:h-7 relative top-0.5 3xl:w-11
                3xl:h-11 4xl:w-20 4xl:h-20 ${githubLogo}`}
              />
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
AppHeader.propTypes = {
  appLogo: PropTypes.string,
  appName: PropTypes.string,
  githubLogo: PropTypes.string,
};
