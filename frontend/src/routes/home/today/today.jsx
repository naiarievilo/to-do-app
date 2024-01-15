import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { loginRequired } from "@/lib/utils.js";
import { TodoList, TodoContainer, TodoListSkeleton } from "@/features/todos/index.js";

export function Today() {
  const [todayList, setTodayList] = useState(null);
  const [loading, setLoading ] = useState(true);

  const route = useLocation().pathname;
  loginRequired(route);

  useEffect(() => {
    let ignore = false;
    setTodayList(null);

    axios.get("/todolists/today")
      .then((result) => {
        if (!ignore) {
          setTodayList(result.data.data);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
      })

    return () => ignore = true;
  }, [setTodayList])

  if (loading) {
    return (
      <TodoContainer>
        <TodoListSkeleton />
      </TodoContainer>
    );
  } else {
    return (
      <TodoContainer>
        {todayList.map(result => {
          return (
            <TodoList
              key={result.listId}
              listId={result.listId}
              listDate={result.listDate}
              listTodos={result.todos}
            />
          );
        })}
      </TodoContainer>
    );
  }
}
