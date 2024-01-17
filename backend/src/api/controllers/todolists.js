import {
  convertToPsqlDate,
  getWeekDates,
  getUpcomingMonday,
} from "#utils/datetime.js";
import { db } from "#db";
import { formatTodoLists } from "#utils/data.js";
import { errorObj, successObj } from "#utils/json.js";

export function getTodaysTodoList() {
  return async (req, res) => {
    const { accessToken } = req.body;
    const todayDate = convertToPsqlDate(Date.now());

    let todayTodos;
    try {
      todayTodos = await db.manyOrNone(
        `SELECT list_id, list_date, todo_id, todo, checked
           FROM userTodoLists
          WHERE list_date = $1 AND user_id = $2
       ORDER BY list_date, todo_id`,
        [todayDate, accessToken.id],
      );
    } catch (err) {
      console.error(err);
      return res.status(500).json(errorObj(err));
    }
    if (todayTodos.length) {
      todayTodos = formatTodoLists(todayTodos);
      return res.status(200).json(successObj(todayTodos));
    }

    try {
      todayTodos = await db.one(
        `INSERT INTO todolists (user_id, date)
         VALUES ($1, $2)
         RETURNING id, date`,
        [accessToken.id, todayDate],
      );
      return res.status(200).json(successObj({ ...todayTodos, todos: [] }));
    } catch (err) {
      console.error(err);
      return res.status(500).json(errorObj(err));
    }
  };
}

export function getWeeklyTodoLists() {
  return async (req, res) => {
    const { accessToken } = req.body;
    const weekDates = getWeekDates();

    let weeklyLists = [];
    for await (const weekDate of weekDates) {
      let weekDateTodos;
      try {
        weekDateTodos = await db.manyOrNone(
          `SELECT list_id, list_date, todo_id, todo, checked
             FROM userTodoLists
            WHERE user_id = $1
              AND list_date = $2
         ORDER BY list_date, todo_id`,
          [accessToken.id, weekDate],
        );
        if (weekDateTodos.length) {
          weekDateTodos = formatTodoLists(weekDateTodos)[0];
          weeklyLists.push(weekDateTodos);
          continue;
        }
      } catch (err) {
        console.error(err);
        return res.status(500).json(errorObj(err));
      }

      if (!weekDateTodos.length) {
        try {
          weekDateTodos = await db.one(
            `INSERT INTO todolists (user_id, date)
             VALUES ($1, $2)
             RETURNING user_id, id, date`,
            [accessToken.id, weekDate],
          );
          weeklyLists.push({
            listId: weekDateTodos.id,
            listDate: weekDateTodos.date,
            todos: [],
          });
        } catch (err) {
          console.error(err);
          return res.status(500).json(errorObj(err));
        }
      }
    }

    return res.status(200).json(successObj(weeklyLists));
  };
}

export function getUpcomingTodoLists() {
  return async (req, res) => {
    const { accessToken } = req.body;
    const upcomingMonday = getUpcomingMonday();

    let todolists;
    try {
      todolists = await db.manyOrNone(
        `SELECT list_id, list_date, todo_id, todo, checked
           FROM userTodoLists
          WHERE user_id = $1
            AND list_date >= $2
       ORDER BY list_date, todo_id`,
        [accessToken.id, upcomingMonday],
      );
    } catch (err) {
      console.error(err);
      return res.status(500).json(errorObj(err));
    }

    let upcomingTodoLists;
    if (!todolists.length) {
      return res.status(200).json(successObj());
    }

    upcomingTodoLists = formatTodoLists(todolists);
    return res.status(200).json(successObj(upcomingTodoLists));
  };
}

export function createTodoList() {
  return async (req, res) => {
    const { list_date, accessToken } = req.body;

    try {
      const hasTodoList = await db.oneOrNone(
        `SELECT id
           FROM todolists
          WHERE user_id = $1
            AND date = $2`,
        [accessToken.id, list_date],
      );
      if (hasTodoList) {
        return res.status(409).json(
          errorObj({
            message: "Todo list already exists.",
          }),
        );
      }
    } catch (err) {
      console.error(err);
      return res.status(500).json(errorObj(err));
    }

    try {
      await db.none(
        `INSERT INTO todolists (user_id, date)
         VALUES ($1, $2)`,
        [accessToken.id, list_date],
      );
    } catch (err) {
      console.error(err);
      return res.status(500).json(errorObj(err));
    }

    return res.status(200).json(successObj());
  };
}

export function deleteTodoList() {
  return async (req, res) => {
    const { list_date, accessToken } = req.body;

    try {
      await db.none(
        `DELETE FROM todolists
               WHERE user_id = $1
                 AND date = $2`,
        [accessToken.id, list_date],
      );
    } catch (err) {
      console.error(err);
      return res.status(500).json(errorObj(err));
    }

    return res.status(200).json(successObj());
  };
}
