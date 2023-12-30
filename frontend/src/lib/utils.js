import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import { redirect } from "react-router-dom";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function loginRequired(route) {
  const hasSession = localStorage.getItem("session");

  if (!route.includes("home") && hasSession) {
    return redirect("/home");
  }

  if (!hasSession) {
    return redirect("/login");
  }
}
