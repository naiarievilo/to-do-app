import { useLocation } from "react-router-dom";

import { AppHeader } from "@/ui/app-header.jsx";
import { loginRequired } from "@/lib/utils.js";
import { AuthnPanel } from "@/features/authentication/index.js";

export function RootIndex() {
  const route = useLocation().pathname;
  loginRequired(route);

  return (
    <>
      <main className="h-full w-full flex flex-col xl:flex-row">
        <section className="grow mb-16 mx-4 mt-4 flex flex-col xl:mr-16">
          <AppHeader />
          <div className="xl:mx-16 xl:my-16">
            <h2
              className="md:mt-34 mx-4 mb-16 mt-20 text-center xl:text-left
              font-sans text-6xl font-semibold leading-[1.10] tracking-tighter
              xs:mt-36 xs:text-7xl sm:mt-44 sm:text-8xl md:text-8xl lg:mt-28
              xl:mt-20 xl:text-7xl 3xl:text-9xl 4xl:mt-60 4xl:text-[12rem]"
            >
              Planning your week has never been&nbsp;
              <span className="underline underline-offset-8 decoration-blue-600">
                easier
              </span>
              .
            </h2>
            <p
              className="mx-8 text-center xl:text-left font-sans text-3xl font-light
              tracking-tight text-slate-700 xs:text-3xl md:text-4xl xl:text-3xl
              2xl:text-4xl 3xl:mt-44 3xl:text-6xl 4xl:text-8xl"
            >
              Keep track of your weekly tasks, enhance your focus, and boost your
              productivity
            </p>
          </div>
        </section>
        <section
          className="flex place-content-center bg-[url('@/assets/lily-pad-blob.webp')]
          bg-[length:800px_800px] 2xl:bg-[length:900px_900px] bg-origin-content
          bg-no-repeat xl:w-6/12 xl:overflow-hidden"
        >
          <AuthnPanel className="my-32 xl:my-36" />
        </section>
      </main>
    </>
  );
}
