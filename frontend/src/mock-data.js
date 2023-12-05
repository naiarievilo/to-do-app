export const mockTodos = [
  {
    date: new Date("Dec 2, 2023"),
    todos: [
      {
        id: 0,
        data: "Give Polly some crackers",
        isChecked: false,
      },
    ],
  },
  {
    date: new Date("Dec 3, 2023"),
    todos: [
      {
        id: 0,
        data: "Give Polly some crackers",
        isChecked: false,
      },
    ],
  },
  {
    date: new Date("Dec 4, 2023"),
    todos: [
      {
        id: 0,
        data: "Give Polly some crackers",
        isChecked: false,
      },
    ],
  },
  {
    date: new Date("Dec 5, 2023"),
    todos: [
      {
        id: 0,
        data: "Give Polly some crackers",
        isChecked: false,
      },
    ],
  },
  {
    date: new Date("Dec 6, 2023"),
    todos: [
      {
        id: 0,
        data: "Give Polly some crackers",
        isChecked: false,
      },
    ],
  },
  {
    date: new Date("Dec 7, 2023"),
    todos: [
      {
        id: 0,
        data: "Give Polly some crackers",
        isChecked: false,
      },
    ],
  },
  {
    date: new Date("Dec 8, 2023"),
    todos: [
      {
        id: 0,
        data: "Give Polly some crackers",
        isChecked: false,
      },
    ],
  },
  {
    date: new Date("Dec 9, 2023"),
    todos: [
      {
        id: 0,
        data: "Give Polly some crackers",
        isChecked: false,
      },
    ],
  },
  {
    date: new Date("Dec 10, 2023"),
    todos: [
      {
        id: 0,
        data: "Give Polly some crackers",
        isChecked: false,
      },
    ],
  },
  {
    date: new Date("Dec 11, 2023"),
    todos: [
      {
        id: 0,
        data: "Give Polly some crackers",
        isChecked: false,
      },
    ],
  },
  {
    date: new Date("Dec 12, 2023"),
    todos: [
      {
        id: 0,
        data: "Give Polly some crackers",
        isChecked: false,
      },
    ],
  },
  {
    date: new Date("Dec 13, 2023"),
    todos: [
      {
        id: 0,
        data: "Give Polly some crackers",
        isChecked: false,
      },
    ],
  },
  {
    date: new Date("Dec 14, 2023"),
    todos: [
      {
        id: 0,
        data: "Give Polly some crackers",
        isChecked: false,
      },
    ],
  },
];

export function addTodo(date, data, isChecked) {
  for (let todo of mockTodos) {
    if (todo.date.getFullYear() !== date.getFullYear() || todo.date.GetMonth() !== date.getMonth() || todo.date.getDate() !== date.getDate()) {
      continue;
    } else {
      todo.todos.push({
        id: todo.todos[todo.todos.length() + 1],
        data: data,
        isChecked: isChecked
      });
    }
  }
}

export function deleteTodo(date, id) {
  for (let todo of mockTodos) {
    if (todo.date.getFullYear() !== date.getFullYear() || todo.date.GetMonth() !== date.getMonth() || todo.date.getDate() !== date.getDate()) {
      continue;
    } else {
      todo.filter((item) => item.id !== id);
    }
  }
}
