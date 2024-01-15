import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { TodoList, TodoContainer, TodoListSkeleton } from "@/features/todos/index.js";
import { loginRequired } from "@/lib/utils.js";

export function Week() {
  const [weeklyLists, setWeeklyLists] = useState(null);
  const [loading, setLoading] = useState(true);

  const route = useLocation().pathname;
  loginRequired(route);

  useEffect(() => {
    let ignore = false;
    setWeeklyLists(null);

    axios.get("/todolists/week")
      .then((result) => {
        if (!ignore) {
          setWeeklyLists(result.data.data);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
      })

    return () => ignore = true;
  }, [setWeeklyLists])

  if (loading) {
    return (
      <TodoContainer>
        <TodoListSkeleton />
        <TodoListSkeleton />
        <TodoListSkeleton />
        <TodoListSkeleton />
        <TodoListSkeleton />
        <TodoListSkeleton />
        <TodoListSkeleton />
      </TodoContainer>
    );
  } else {
    return (
      <TodoContainer>
        <ul className="flex h-full w-full grow flex-col">
          {weeklyLists.map((weeklyList) => 
            <TodoList
              key={weeklyList.listId}
              listId={weeklyList.listId}
              listDate={new Date(weeklyList.listDate)}
              listTodos={weeklyList.todos}
            />
          )}
        </ul>
      </TodoContainer>
    );
  }
}
