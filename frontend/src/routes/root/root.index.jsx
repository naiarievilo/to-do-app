import { Link } from "react-router-dom";

import { AppLogo, GithubLogo } from "@assets/index.js";
import { MainContent } from "@layout/index.js";

export function RootIndex() {
  return (
    <MainContent
      classes="min-h-full flex flex-col app-bg"
    >
      <section className="mx-8 my-8 4xl:mx-24 4xl:my-20">
        <header
          className="align-center flex flex-row items-center"
        >
          <AppLogo
            classes="w-10 h-10 select-none stroke-slate-900 mr-2 3xl:w-20
            3xl:h-20 4xl:w-32 4xl:h-32"
          />
          <h1
            className="relative top-0.5 grow select-none font-sans text-3xl
            font-semibold tracking-tight 3xl:text-5xl 4xl:text-7xl"
          >
            TODO
          </h1>
          <GithubLogo
            container="transition-all hover:scale-110 duration-300 ease-in-out"
            logo="w-6 h-6 stroke-slate-800 my-auto sm:w-7 sm:h-7 relative top-1
            3xl:w-11 3xl:h-11 4xl:w-20 4xl:h-20"
          />
        </header>
        <h2
          className="mb-16 mt-20 text-center font-sans text-6xl font-semibold
          leading-[1.10] tracking-tighter xs:text-7xl xs:mt-36 sm:mt-44 md:mt-36
          sm:text-8xl md:text-8xl xl:text-7xl 2xl:text-8xl 3xl:text-9xl
          3xl:mt-72 4xl:text-[12rem] 4xl:mt-96"
        >
          Planning your week has never been easier.
        </h2>
        <p
          className="mx-4 text-center font-sans text-3xl font-light
          tracking-tight xs:text-4xl 3xl:text-6xl 3xl:mt-32 4xl:text-8xl
          4xl:mt-44"
        >
          Keep track of your weekly tasks, enhance your focus, and boost your
          productivity
        </p>
      </section>
      <nav
        className="mx-auto my-20 flex flex-col justify-center space-y-12 p-1
        lg:flex-row lg:space-x-20 lg:space-y-0 3xl:my-40 4xl:space-x-40"
      >
        <Link
          to={`/login/`}
          className="block select-none rounded-full border-2 border-slate-900
          bg-slate-900 px-8 py-4 text-center font-mono text-4xl tracking-tight
          text-white shadow-sm transition-all duration-300 ease-in-out 
          hover:-translate-x-1 hover:-translate-y-1 hover:shadow-lg 3xl:text-5xl
          3xl:py-8 3xl:px-12 4xl:text-7xl 4xl:py-12 4xl:px-16"
        >
          Sign In
        </Link>
        <Link
          to={`/register/`}
          className=" block select-none rounded-full border-2 border-slate-900
          px-8 py-4 text-center font-mono text-4xl tracking-tight shadow-sm
          transition-all duration-300 ease-in-out hover:-translate-x-1
          hover:-translate-y-1 hover:shadow-lg 3xl:text-5xl 3xl:py-8 3xl:px-12
          4xl:text-7xl 4xl:py-12 4xl:px-16"
        >
          Sign Up
        </Link>
      </nav>
    </MainContent>
  );
}
