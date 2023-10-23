import { TodosIndex } from "@/features/todos/index.js";

export function Upcoming() {
  return (
    <TodosIndex
      container="bg-purple-50"
      title="Schedule upcoming tasks"
      btnClass="bg-purple-500 hover:bg-purple-600 active:bg-purple-700"
      btnName="CREATE UPCOMING TO-DOS"
    />
  );
}
