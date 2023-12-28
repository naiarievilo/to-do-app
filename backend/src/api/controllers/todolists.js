import {
  convertToPsqlDate,
  getWeekDates,
  getUpcomingMonday,
} from "#utils/date.js";
import { db } from "#db";

export function getTodaysTodoList() {
  return async (req, res) => {
    const { accessToken } = req.body;
    const todayDate = convertToPsqlDate(Date.now());

    try {
      const todayTodos = await db.one(
        `SELECT todo_id, todo, checked
           FROM userTodoLists
          WHERE todolist_date = $1 AND user_id = $2`,
        [todayDate, accessToken.id],
      );
      return res.status(200).json({ upcomingTodolists: todayTodos });
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
  };
}

export function getWeeklyTodoLists() {
  return async (req, res) => {
    const { accessToken } = req.body;
    const weekDates = getWeekDates();

    let weeklyLists = [];
    for (const weekDate of weekDates) {
      let weekDateTodos;
      try {
        weekDateTodos = await db.manyOrNone(
          `SELECT todo_id, todo, checked
             FROM userTodoLists
            WHERE user_id = $1
              AND list_date = $2
         ORDER BY list_date`,
          [accessToken.id, weekDate],
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

      if (!weekDateTodos) {
        try {
          await db.none(
            `INSERT INTO todolists (user_id, date)
             VALUES ($1, $2)`,
            [accessToken.id, weekDate],
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
      }

      weeklyLists.push({
        list_date: weekDate,
        upcomingTodolists: weekDateTodos,
      });
    }

    return res.status(200).json({ upcomingTodolists: weeklyLists });
  };
}

export function getUpcomingTodoLists() {
  return async (req, res) => {
    const { accessToken } = req.body;
    const upcomingMonday = getUpcomingMonday();

    let todolists;
    try {
      todolists = await db.ManyOrNone(
        `SELECT list_date, todo_id, todo, checked
           FROM userTodoLists
          WHERE user_id = $1
            AND list_date >= $2::date
       ORDER BY list_date`,
        [accessToken.id, upcomingMonday],
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

    let upcomingTodolists = [];
    let temp = {};
    let lastListDate;
    for (const todolist of todolists) {
      const listDate = todolist.list_date;
      const todo = {
        todo_id: todolist.todo_id,
        todo: todolist.todo,
        checked: todolist.checked,
      };

      if (lastListDate !== undefined && lastListDate !== listDate) {
        upcomingTodolists.push({
          date: lastListDate,
          todos: temp[lastListDate],
        });
      }

      if (!temp[listDate]) {
        temp[listDate] = [todo];
        lastListDate = listDate;
        continue;
      }

      temp[listDate].push(todo);
    }

    return res.status(200).json({
      data: upcomingTodolists,
    });
  };
}

export function createTodoList() {
  return async (req, res) => {
    const { list_date, accessToken } = req.body;

    try {
      await db.none(
        `INSERT INTO todolists (user_id, date)
         VALUES ($1, $2)`,
        [accessToken.id, list_date],
      );

      return res.status(200).json({});
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

      return res.status(200).json({});
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
  };
}
