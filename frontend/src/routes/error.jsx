import { useRouteError } from "react-router-dom";

export function Error() {
  const error = useRouteError();
  console.log(error);

  return (
    <main className="container mx-auto">
      <h1>Oops! Something went wrong...</h1>
      <p>
        An unexpected error has occurred while trying to access the current
        route:
      </p>
      <p>
        <strong>{error.name + ": " + error.message}</strong>
      </p>
    </main>
  );
}
