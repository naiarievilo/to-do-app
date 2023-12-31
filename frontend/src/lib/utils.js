import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const APP_URL = "http://localhost:5173";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function redirect(route) {
  return window.location.replace(APP_URL+route);
}

export function loginRequired(route) {
  const inSession = localStorage.getItem("session");
  if (!route.includes("home") && inSession) {
    return redirect("/home");
  }

  if (route.includes("home") && !inSession) {
    return redirect("/login");
  }
}
