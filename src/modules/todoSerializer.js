import { Todo } from './todo.js';

export class TodoSerializer {
  static toJSON(todo) {
    return {
      id: todo.id,
      text: todo.text,
      completed: todo.completed,
      createdAt: todo.createdAt.toISOString(),
    };
  }

  static fromJSON(data) {
    const todo = new Todo(data.text, data.completed, data.id);
    todo.createdAt = new Date(data.createdAt);
    return todo;
  }
}
