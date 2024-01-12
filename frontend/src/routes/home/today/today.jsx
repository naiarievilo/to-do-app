import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { loginRequired } from "@/lib/utils.js";
import { TodoList, TodoContainer } from "@/features/todos/index.js";

export function Today() {
  const [results, setResults] = useState(null);
  const [loading, setLoading ] = useState(true);

  const route = useLocation().pathname;
  loginRequired(route);

  useEffect(() => {
    let ignore = false;
    setResults(null);

    axios.get("/todolists/today")
      .then((result) => {
        if (!ignore) {
          setResults(result.data.data);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
      })

    return () => ignore = true;
  }, [setResults])

  if (loading) {
    return <p>loading...</p>
  } else {
    return (
      <TodoContainer>
        {results.map(result => {
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
