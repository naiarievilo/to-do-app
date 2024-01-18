import { PropTypes } from "prop-types";

import { AppLogo } from "@/assets/index.js";
import { LogoutButton } from "@/features/authentication/index.js";

import { isLoggedIn } from "@/lib/utils.js";

export function AppHeader({ header, appIcon, appName }) {
  const LoggedMenu = <LogoutButton />;

  return (
    <header
      className={`flex w-full items-center justify-between px-8 py-3 ${header}`}
    >
      <AppLogo
        appName={appName}
        appIcon={appIcon}
      />
      <nav>{isLoggedIn() && LoggedMenu}</nav>
    </header>
  );
}
AppHeader.propTypes = {
  appIcon: PropTypes.string,
  appName: PropTypes.string,
  header: PropTypes.string,
};
