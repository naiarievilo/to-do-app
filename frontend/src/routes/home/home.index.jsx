import { TodosIndex } from "@/features/todos/index.js";

export function HomeIndex() {
  return (
    <TodosIndex
      container="bg-pink-50"
      title="Start organizing your schedule"
      btnClass="bg-rose-500 hover:bg-rose-600 active:bg-rose-700"
      btnName="CREATE TO-DOS"
    />
  );
}
