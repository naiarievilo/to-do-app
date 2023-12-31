import { useLocation } from "react-router-dom";

import { AppHeader } from "@/ui/app-header.jsx";
import { loginRequired } from "@/lib/utils.js";
import { AuthnPanel } from "@/features/authentication/index.js";

export function RootIndex() {
  const route = useLocation().pathname;
  loginRequired(route);

  return (
    <>
      <main className="flex h-full w-full flex-col xl:flex-row">
        <section className="mx-4 mb-16 mt-4 flex grow flex-col xl:mr-16">
          <AppHeader />
          <div className="xl:mx-16 xl:my-16">
            <h2
              className="md:mt-34 mx-4 mb-16 mt-20 text-center font-sans
              text-6xl font-semibold leading-[1.10] tracking-tighter xs:mt-36
              xs:text-7xl sm:mt-44 sm:text-8xl md:text-8xl lg:mt-28 xl:mt-20
              xl:text-left xl:text-7xl 3xl:text-9xl 4xl:mt-60 4xl:text-[12rem]"
            >
              Planning your week has never been&nbsp;
              <span className="underline decoration-blue-600 underline-offset-8">
                easier
              </span>
              .
            </h2>
            <p
              className="mx-8 text-center font-sans text-3xl font-light tracking-tight
              text-slate-700 xs:text-3xl md:text-4xl xl:text-left xl:text-3xl
              2xl:text-4xl 3xl:mt-44 3xl:text-6xl 4xl:text-8xl"
            >
              Keep track of your weekly tasks, enhance your focus, and boost
              your productivity
            </p>
          </div>
        </section>
        <section
          className="flex place-content-center
          bg-[url('@/assets/lily-pad-blob.webp')] bg-[length:800px_800px]
          bg-no-repeat bg-origin-content xl:w-6/12 xl:place-content-around
          xl:overflow-hidden 2xl:place-content-center 2xl:bg-[length:900px_900px]"
        >
          <AuthnPanel className="my-24" />
        </section>
      </main>
    </>
  );
}
