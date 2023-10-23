import { Link } from "react-router-dom";

import { AppHeader } from "@/shared/ui/index.js";

export function RootIndex() {
  return (
    <main className="flex min-h-screen flex-col content-between">
      <section className="flex flex-col">
        <AppHeader githubLogo="stroke-slate-800" />
        <h2
          className="md:mt-34 xs:mt-36 xs:text-7xl 3xl:text-9xl 4xl:mt-60 4xl:text-[12rem] mx-4
          mb-16 mt-20 text-center font-sans text-6xl
          font-semibold leading-[1.10] tracking-tighter sm:mt-44 sm:text-8xl md:text-8xl
          lg:mt-28 xl:mt-20 xl:text-7xl 2xl:text-8xl"
        >
          Planning your week has never been easier.
        </h2>
        <p
          className="xs:text-3xl 3xl:mt-32 3xl:text-6xl 4xl:mt-44 4xl:text-8xl
          mx-8 text-center font-sans text-3xl font-light
          tracking-tight md:text-4xl xl:text-3xl 2xl:text-4xl"
        >
          Keep track of your weekly tasks, enhance your focus, and boost your
          productivity
        </p>
        <nav
          className="3xl:my-40 4xl:space-x-40 mx-auto my-20 flex flex-col justify-center
          space-y-12 p-1 lg:flex-row lg:space-x-20 lg:space-y-0"
        >
          <Link
            to={`/login/`}
            className="tacking-tight 3xl:px-12 3xl:py-8 3xl:text-4xl 4xl:px-16
            4xl:py-12 4xl:text-6xl block select-none rounded-2xl border-2 border-blue-500
            bg-blue-500 px-8 py-4 text-center 
            font-sans text-3xl text-white
            transition-all duration-300 ease-in-out hover:bg-transparent hover:text-blue-500"
          >
            Sign In
          </Link>
          <Link
            to={`/register/`}
            className=" 3xl:px-12 3xl:py-8 3xl:text-4xl 4xl:px-16 4xl:py-12
            4xl:text-6xl block select-none rounded-2xl border-2 border-pink-400
            px-8 py-4 text-center font-sans
            text-3xl tracking-tight text-pink-400 transition-all duration-300
            ease-in-out hover:bg-pink-400 hover:text-white"
          >
            Sign Up
          </Link>
        </nav>
      </section>
      <div
        className="insext-x-0 4xl:h-[632px] relative bottom-0 h-[200px]
        min-w-full bg-[url('@assets/index-bg.svg')] bg-cover bg-bottom
        bg-no-repeat md:h-[400px] lg:h-[580px] xl:h-[240px] 2xl:h-[460px]"
        aria-hidden={true}
      ></div>
    </main>
  );
}
