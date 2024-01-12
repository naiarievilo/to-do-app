import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { TodoList, TodoContainer } from "@/features/todos/index.js";
import { loginRequired, redirect } from "@/lib/utils.js";

export function Week() {
  const { weeklyLists, setWeeklyLists } = useState(null);

  const route = useLocation().pathname;
  loginRequired(route);

  useEffect(() => {
    let ignore = false;
    setWeeklyLists(null);

    axios.get("/todolists/week").then((res) => {
      !ignore && setWeeklyLists(res?.data.data);
    }).catch((err) => {
        console.error(err);
        redirect("/");
      })

    return () => {
      ignore = true
    };
  }, [setWeeklyLists]);

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
