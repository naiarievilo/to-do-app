CREATE TABLE IF NOT EXISTS users (
          id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY, 
       email TEXT UNIQUE NOT NULL,
        hash TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS todolists (
          id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
     user_id INTEGER NOT NULL REFERENCES users ON DELETE CASCADE,
        date DATE NOT NULL,
      UNIQUE (user_id, date)
);

CREATE TABLE IF NOT EXISTS todos (
          id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
     list_id INTEGER NOT NULL REFERENCES todolists ON DELETE CASCADE,
        todo TEXT,
     checked BOOLEAN NOT NULL
);

CREATE VIEW userTodoLists AS
     SELECT tl.user_id,
            tl.id AS list_id,
            tl.date AS list_date,
            td.id AS todo_id,
            td.todo,
            td.checked
       FROM todolists AS tl
  LEFT JOIN todos AS td
         ON tl.id = td.list_id;

