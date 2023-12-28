/* 
 * Format records retrieved from pg-promise from:
 *
 *      [ {todo1Props}, {todo2Props}, {todo3Props} ...]
 * to:
 *      [{
 *         listId: 0,
 *         listDate: '2023-12-28',
 *         todos: [{todo1}, {todo2}, {todo3}, ...]
 *       }]
 * */

export function formatTodoLists(records) {
  let todoLists = [];
  let temp;

  for (const record of records) {
    const listId = record.list_id;
    const listDate = record.list_date;
    const todo = {
      todoId: record.todo_id,
      todo: record.todo,
      checked: record.checked,
    };

    if (!temp) {
      temp = {
        listId: listId,
        listDate: listDate,
        todos: [todo]
      };
      continue;
    };

    if (temp.listId !== listId) {
      todoLists.push(temp);
      temp = {
        listId: listId,
        listDate: listDate,
        todos: [todo]
      };
      continue;
    }

    temp.todos.push(todo);
  }

  todoLists.push(temp);

  return todoLists;
}
