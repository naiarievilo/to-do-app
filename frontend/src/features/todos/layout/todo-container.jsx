import { PropTypes } from "prop-types";
import { ScrollArea, ScrollBar } from "@/ui/scroll-area.jsx";

export function TodoContainer({ children }) {
  return (
    <ScrollArea className="flex h-full max-h-full w-full max-w-full justify-start overflow-y-auto px-4 xl:px-8">
      {children}
      <ScrollBar className="bg-slate-50" />
    </ScrollArea>
  );
}
TodoContainer.propTypes = {
  children: PropTypes.array,
};
