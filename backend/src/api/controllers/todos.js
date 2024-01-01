import { db } from "#db";
import { errorObj, successObj } from "#utils/json.js";

export function createTodo() {
  return async (req, res) => {
    const { list_id, todo, checked } = req.body;

    let todoInfo;
    try {
      todoInfo = await db.one(
        `INSERT INTO todos (todo, checked, list_id)
         VALUES ($1, $2, $3)
         RETURNING id, todo, checked`,
        [todo, checked, list_id],
      );
    } catch (err) {
      console.error(err);
      return res.status(500).json(errorObj(err));
    }

    return res.status(200).json(successObj(todoInfo));
  };
}

export function updateTodo() {
  return async (req, res) => {
    const { list_id, todo_id, todo, checked } = req.body;

    try {
      await db.none(
        `UPDATE todos
            SET todo = $1, checked = $2
          WHERE list_id = $3
            AND id = $4`,
        [todo, checked, list_id, todo_id],
      );
    } catch (err) {
      console.error(err);
      return res.status(500).json(errorObj(err));
    }

    return res.status(200).json(successObj());
  };
}

export function deleteTodo() {
  return async (req, res) => {
    const { list_id, todo_id } = req.body;

    try {
      await db.none(
        `DELETE FROM todos
               WHERE id = $1
                 AND list_id = $2`,
        [todo_id, list_id],
      );
    } catch (err) {
      console.error(err);
      return res.status(500).json(errorObj(err));
    }

    return res.status(200).json(successObj());
  };
}
