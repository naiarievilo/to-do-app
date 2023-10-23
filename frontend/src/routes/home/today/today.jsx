import { TodosIndex } from "@/features/todos/index.js";

export function Today() {
  return (
    <TodosIndex
      container="bg-teal-50"
      title="Write out your tasks for today"
      btnClass="bg-teal-500 hover:bg-teal-600 active:bg-teal-700"
      btnName="CREATE TODAY'S TO-DO"
    />
  );
}
