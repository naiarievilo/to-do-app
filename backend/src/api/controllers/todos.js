import { db } from "#db";
import { errorObj, successObj } from "#utils/json.js";

export function createTodo() {
  return async (req, res) => {
    const { list_id, todo, checked } = req.body;

    let todoInfo;
    try {
      todoInfo = await db.one(
        `INSERT INTO todos (list_id, todo, checked)
         VALUES ($1, $2, $3)
         RETURNING id, todo, checked`,
        [list_id, todo, checked],
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
    const { todo_id, todo, checked } = req.body;

    try {
      await db.none(
        `UPDATE todos
            SET todo = $1, checked = $2
          WHERE id = $3`,
        [todo, checked, todo_id],
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
    const { todo_id } = req.body;

    try {
      await db.none(
        `DELETE FROM todos
               WHERE id = $1`,
        [todo_id],
      );
    } catch (err) {
      console.error(err);
      return res.status(500).json(errorObj(err));
    }

    return res.status(200).json(successObj());
  };
}
