import { PropTypes } from "prop-types";
import { ScrollArea, ScrollBar } from "@/ui/scroll-area.jsx";

export function TodoContainer({ children }) {
  return (
    <ScrollArea className="h-full max-h-full w-full max-w-full overflow-y-auto">
      {children}
      <ScrollBar className="bg-slate-50" />
    </ScrollArea>
  );
}
TodoContainer.propTypes = {
  children: PropTypes.array,
};
