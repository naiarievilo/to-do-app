import { Link, useLocation } from "react-router-dom";
import { PropTypes } from "prop-types";

import {
  AppIcon,
  AppLogo,
  LoginIcon,
  MenuIcon,
  RegisterIcon,
} from "@/assets/index.js";
import { Button } from "@/ui/button.jsx";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/ui/navigation-menu.jsx";
import { Separator } from "@/ui/separator.jsx";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/ui/sheet.jsx";

export function AppHeader({ header, appIcon, appName }) {
  const location = useLocation();
  const route = location.pathname;

  const AnonymousMenu = (
    <>
      <MenuListStandard />
      <MenuListMobile />
    </>
  );
  const LoggedMenu = <></>;

  return (
    <header
      className={`flex w-full items-center justify-between px-8 py-3 ${header}`}
    >
      <AppLogo appName={appName} appIcon={appIcon} />
      <NavigationMenu>
        {!route.includes("home") ? AnonymousMenu : LoggedMenu}
      </NavigationMenu>
    </header>
  );
}
AppHeader.propTypes = {
  appIcon: PropTypes.string,
  appName: PropTypes.string,
  header: PropTypes.string,
};

function MenuListStandard() {
  return (
    <NavigationMenuList className="hidden sm:flex">
      <NavigationMenuItem className="mr-4 self-center">
        <NavigationMenuLink>
          <Link
            to={`/login/`}
            className="my-auto select-none rounded-md px-4 py-1
            font-sans text-lg tracking-tight text-slate-800
            transition-all duration-200 hover:text-blue-600 3xl:text-4xl
            4xl:text-6xl"
          >
            Log in
          </Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink>
          <Link
            to={`/register/`}
            className="my-auto select-none rounded-md bg-blue-600 px-4
            py-2 font-sans text-lg tracking-tight text-slate-50
            transition-all duration-200 hover:bg-blue-500/90 3xl:text-4xl
            4xl:text-6xl"
          >
            Sign up
          </Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  );
}

function MenuListMobile() {
  return (
    <NavigationMenuList className="sm:hidden">
      <NavigationMenuItem>
        <Sheet>
          <SheetTrigger asChild>
            <Button className="flex items-center">
              <MenuIcon className="h-10 w-10 fill-slate-800" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader className="relative -left-1 -top-2">
              <SheetTitle className="mb-8 flex items-center space-x-1">
                <AppIcon className="h-10 w-10 fill-blue-500" />
                <h2 className="text-2xl tracking-tight text-slate-800">TODO</h2>
              </SheetTitle>
            </SheetHeader>
            <ul className="my-8 flex flex-col">
              <li className="flex">
                <Link to={`/login/`} className="flex items-center">
                  <LoginIcon className="mr-2 h-8 w-8 fill-blue-500" />
                  <h2 className="text-2xl tracking-tight text-slate-800">
                    Log in
                  </h2>
                </Link>
              </li>
              <Separator className="my-6 bg-slate-200" />
              <li>
                <Link to={`/register/`} className="flex items-center">
                  <RegisterIcon className="mr-2 h-8 w-8 fill-blue-500" />
                  <h2 className="text-2xl tracking-tight text-slate-800">
                    Sign up
                  </h2>
                </Link>
              </li>
            </ul>
          </SheetContent>
        </Sheet>
      </NavigationMenuItem>
    </NavigationMenuList>
  );
}
