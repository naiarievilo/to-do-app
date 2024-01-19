import { useRouteError } from "react-router-dom";

import { AppLogo } from "@/assets/index.js";
import { Button } from "@/ui/button.jsx";

export function Error() {
  const err = useRouteError();
  console.log(err);

  return (
    <main className="bg-error flex h-full w-full flex-col px-4 py-2 xl:flex-row">
      <section className="mx-4 mb-16 mt-4 flex grow flex-col xl:mr-16">
        <AppLogo />
        <section
          className="container mx-auto my-60 flex max-w-xl flex-col place-content-center
          px-8 text-center text-2xl tracking-wide text-slate-700"
        >
          <h1 className="mb-8 text-5xl font-semibold">
            <strong>{setErrorMessage(err.status)}</strong>
          </h1>
          <p className="mb-12">Oops! Something went wrong...</p>
          <Button
            className="w-auto rounded-xl px-8 py-6 tracking-wide"
            onClick={() => history.back()}
          >
            Go back
          </Button>
        </section>
      </section>
    </main>
  );
}

function setErrorMessage(statusCode) {
  switch (statusCode) {
    case 400:
      return "400 Bad Request";
    case 401:
      return "401 Unauthorized";
    case 403:
      return "403 Forbidden";
    case 404:
      return "404 Not Found";
    case 500:
      return "500 Internal Server Error";
    case 502:
      return "502 Bad Gateway";
    default:
      return statusCode;
  }
}
