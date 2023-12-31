import { Button } from "@/ui/button.jsx";
import { LogoutIcon } from "@/assets/index.js";
import { logOutUser } from "../api/users.js";
import { redirect } from "@/lib/utils.js";

export function LogoutButton() {
  async function handleClick(event) {
    event.stopPropagation();
    try {
      await logOutUser();
      localStorage.removeItem("session");
      return redirect("/");
    } catch (err) {
      alert(err.message);
    }
  }
  return (
    <Button size="icon" className="rounded-full" onClick={handleClick}>
      <LogoutIcon className="h-10 w-10 fill-slate-50" />
    </Button>
  );
}
