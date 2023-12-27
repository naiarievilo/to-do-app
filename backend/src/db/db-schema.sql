CREATE TABLE IF NOT EXISTS users (
       id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY, 
    email TEXT UNIQUE NOT NULL,
     hash TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS todolists (
  user_id INTEGER REFERENCES users ON DELETE CASCADE,
       id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
     date DATE NOT NULL
);

CREATE TABLE IF NOT EXISTS todos (
  list_id INTEGER REFERENCES todolists ON DELETE CASCADE,
       id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
     todo TEXT,
  checked BOOLEAN NOT NULL
);

CREATE VIEW userTodoLists AS
   SELECT u.id AS user_id,
          tl.date AS list_date,
          td.id AS todo_id,
          td.todo AS todo,
          td.checked AS checked
     FROM users AS u, todolists AS tl, todos AS td
    WHERE u.id = tl.user_id AND tl.id = td.list_id;

