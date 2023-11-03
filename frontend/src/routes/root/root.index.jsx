import { AppHeader } from "@/ui/app-header.jsx";

export function RootIndex() {
  return (
    <main>
      <section className="mb-16 flex flex-col">
        <AppHeader />
        <h2
          className="md:mt-34 mx-4 mb-16 mt-20 text-center
          font-sans text-6xl font-semibold leading-[1.10] tracking-tighter
          xs:mt-36 xs:text-7xl sm:mt-44 sm:text-8xl md:text-8xl lg:mt-28
          xl:mt-20 xl:text-7xl 3xl:text-9xl 4xl:mt-60 4xl:text-[12rem]"
        >
          Planning your week has never been easier.
        </h2>
        <p
          className="mx-8 text-center font-sans text-3xl font-light
          tracking-tight text-slate-700 xs:text-3xl md:text-4xl xl:text-3xl
          2xl:text-4xl 3xl:mt-32 3xl:text-6xl 4xl:mt-44 4xl:text-8xl"
        >
          Keep track of your weekly tasks, enhance your focus, and boost your
          productivity
        </p>
      </section>
    </main>
  );
}
