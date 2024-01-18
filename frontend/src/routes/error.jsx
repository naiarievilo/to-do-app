import { useRouteError } from "react-router-dom";

import { AppLogo } from "@/assets/index.js";
import { Button } from "@/ui/button.jsx";

export function Error() {
  const err = useRouteError();
  console.log(err);

  return (
    <main className="py-2 px-4 bg-error flex h-full w-full flex-col xl:flex-row">
      <section className="mx-4 mb-16 mt-4 flex grow flex-col xl:mr-16">
        <AppLogo />
        <section
          className="my-60 container max-w-xl mx-auto flex flex-col place-content-center
          tracking-wide text-center px-8 text-slate-700 text-2xl"
        >
          <h1 className="font-semibold text-5xl mb-8">
            <strong>{setErrorMessage(err.status)}</strong>
          </h1>
          <p className="mb-12">
            Oops! Something went wrong...
          </p>
          <Button
            className="w-auto tracking-wide py-6 px-8 rounded-xl"
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
      return statusCode
  }
}
