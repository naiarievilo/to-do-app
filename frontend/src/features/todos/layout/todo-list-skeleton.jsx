import { Skeleton } from "@/ui/skeleton.jsx";
import { Separator } from "@/ui/separator.jsx";


export function TodoListSkeleton() {
  return (
      <div className="mb-12 mt-4 flex w-full flex-col rounded-3xl px-12 pb-16 pt-4">
        <Skeleton className="my-4 h-12" />
        <Separator />
        <div className="my-4 flex flex-col rounded-xl">
          <TodoSkeleton />
          <TodoSkeleton />
          <TodoSkeleton />
        </div>
      </div>
  );
}

function TodoSkeleton() {
  return (
    <>
      <div className="flex items-center my-2">
        <Skeleton className="h-4 w-4 rounded-xs mx-4" />
        <Skeleton className="p-4 grow h-9 my-1" />
        <Skeleton className="h-9 w-9 rounded-full mx-4" />
      </div>
      <Separator className="my-2 bg-slate-200/75" />
    </>
  );
}
