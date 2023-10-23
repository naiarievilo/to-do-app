import { TodosIndex } from "@/features/todos/index.js";

export function Week() {
  return (
    <TodosIndex
      container="bg-blue-50"
      title="Organize your week"
      btnClass="bg-blue-500 hover:bg-blue-600 active:bg-blue-700"
      btnName="CREATE WEEKLY TO-DOS"
    />
  );
}
