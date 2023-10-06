import { Link } from "react-router-dom";

import { AppLogo, MainContent } from "@layout/index.js";

export function RootIndex() {
  return (
    <MainContent classes="max-w-full max-h-full flex flex-col page-center my-8 mx-8">
      <article>
        <header className="align-center mb-8 flex flex-row items-center">
          <AppLogo classes="w-10 h-10 stroke-slate-900 mr-2" />
          <h1
            className="relative top-0.5 font-sans text-3xl font-semibold
            tracking-tight"
          >
            TODO
          </h1>
        </header>
        <h2 className="mt-20 text-center leading-[1.10] mb-16 font-sans text-6xl font-semibold tracking-tighter">
          Keeping track of your weekly tasks has never been easier.
        </h2>
        <p className="font-sans text-center text-3xl font-light tracking-tight">
          Schedule your week with our to-do lists, improve your organization and
          boost your productivity!
        </p>
      </article>
      <nav className="mx-auto my-24 flex flex-col space-y-12">
        <Link
          to={`/login/`}
          className="rounded-full border-2 border-slate-900 bg-slate-900 px-8
          py-4 font-mono text-4xl font-semibold tracking-tight text-white
          shadow-sm transition-all;delay-75 duration-300 ease-in-out
          hover:-translate-x-0.5 hover:-translate-y-0.5"
        >
          Sign In
        </Link>
        <Link
          to={`/register/`}
          className="rounded-full border-4 border-slate-900 px-8 py-4 font-mono
          text-4xl font-semibold tracking-tight shadow-sm transition-all delay-75
          duration-300 ease-in-out hover:-translate-x-0.5 hover:-translate-y-0.5"
        >
          Sign Up
        </Link>
      </nav>
    </MainContent>
  );
}
