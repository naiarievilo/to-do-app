import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

import { AppIcon, LoginIcon, MenuIcon, RegisterIcon } from "@/assets/index.js";
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

export function AppHeader({ appLogo, appName }) {
  return (
    <header className="flex min-w-full items-center justify-between px-8 py-4">
      <Link to={`/`} className="flex items-center">
        <AppIcon
          className={`mr-1 h-10 w-10 select-none fill-rose-500 3xl:h-20 3xl:w-20
          4xl:h-32 4xl:w-32 ${appLogo}`}
        />
        <h2
          className={`my-auto select-none font-sans text-3xl
          font-semibold tracking-tight 3xl:text-5xl 4xl:text-7xl ${appName}`}
        >
          TODO
        </h2>
      </Link>
      <NavigationMenu>
        <MenuListStandard />
        <MenuListMobile />
      </NavigationMenu>
    </header>
  );
}
AppHeader.propTypes = {
  appLogo: PropTypes.string,
  appName: PropTypes.string,
};

function MenuListStandard() {
  return (
    <NavigationMenuList className="my-2 hidden sm:flex">
      <NavigationMenuItem className="mr-4 self-center">
        <NavigationMenuLink>
          <Link
            to={`/login/`}
            className="my-auto select-none rounded-md px-4 py-1
            font-sans text-xl font-semibold tracking-tight text-slate-800 transition-all 
            duration-200 hover:text-rose-500 3xl:text-4xl 4xl:text-6xl"
          >
            Log in
          </Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink>
          <Link
            to={`/register/`}
            className="my-auto select-none rounded-md bg-rose-500 px-4
            py-2 font-sans text-xl font-semibold tracking-tight text-slate-50
            transition-all duration-200 hover:bg-rose-500/90 3xl:text-4xl
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
                <AppIcon className="h-10 w-10 fill-rose-500" />
                <h2 className="text-2xl tracking-tight text-slate-800">TODO</h2>
              </SheetTitle>
            </SheetHeader>
            <ul className="my-8 flex flex-col">
              <li className="flex">
                <Link to={`/login/`} className="flex items-center">
                  <LoginIcon className="mr-2 h-8 w-8 fill-rose-500" />
                  <h2 className="text-2xl tracking-tight text-slate-800">
                    Log in
                  </h2>
                </Link>
              </li>
              <Separator className="my-6 bg-slate-200" />
              <li>
                <Link to={`/register/`} className="flex items-center">
                  <RegisterIcon className="mr-2 h-8 w-8 fill-rose-500" />
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
