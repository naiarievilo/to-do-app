import { db } from "#db";

export function createTodo() {
  return async (req, res) => {
    const { todo, checked, todoListDate, accessToken } = req.body;

    try {
      await db.none(
        `INSERT INTO todos (todo, checked)
         VALUES ($1, $2)
          WHERE list_id = (SELECT id
                             FROM todolists
                            WHERE user_id = $3
                              AND date = $4);`,
        [todo, checked, accessToken.id, todoListDate],
      );
    } catch (err) {
      console.error(err);
      return res.status(500).json({
        error: {
          name: err.name,
          cause: err.cause,
          message: err.message,
        },
      });
    }

    return res.status(200).json({});
  };
}

export function updateTodo() {
  return async (req, res) => {
    const { todo, checked, todoListDate, accessToken } = req.body;

    try {
      await db.none(
        `UPDATE todos
            SET todo = $1, checked = $2
          WHERE list_id = (SELECT id
                             FROM todolists
                            WHERE user_id = $3
                              AND date = $4)`,
        [todo, checked, accessToken.id, todoListDate],
      );
    } catch (err) {
      console.error(err);
      return res.status(500).json({
        error: {
          name: err.name,
          cause: err.cause,
          message: err.message,
        },
      });
    }

    return res.status(200).json({});
  };
}

export function deleteTodo() {
  return async (req, res) => {
    const { todo_id, accessToken } = req.body;

    try {
      await db.none(
        `DELETE FROM todos
               WHERE id = $1
                 AND list_id = (SELECT id
                                  FROM todolists
                                 WHERE user_id = $2)`,
        [todo_id, accessToken.id],
      );
    } catch (err) {
      console.error(err);
      return res.status(500).json({
        error: {
          name: err.name,
          cause: err.cause,
          message: err.message,
        },
      });
    }

    return res.status(200).json({});
  };
}
