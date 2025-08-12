import { Todo } from './todo.js';
import { TodoSerializer } from './todoSerializer.js';

export class Project {
    constructor(name = 'Default Project') {
        this.name = name;
        this.todos = [];
    }

    addTodo(text) {
        const todo = new Todo(text);
        this.todos.push(todo);
        return todo;
    }

    removeTodo(id) {
        const index = this.todos.findIndex(todo => todo.id === id);
        if (index !== -1) {
            this.todos.splice(index, 1);
            return true;
        }
        return false;
    }

    getTodo(id) {
        return this.todos.find(todo => todo.id === id);
    }

    toggleTodo(id) {
        const todo = this.getTodo(id);
        if (todo) {
            todo.toggle();
            return true;
        }
        return false;
    }

    updateTodo(id, newText) {
        const todo = this.getTodo(id);
        if (todo) {
            todo.updateText(newText);
            return true;
        }
        return false;
    }

    getAllTodos() {
        return [...this.todos];
    }

    getCompletedTodos() {
        return this.todos.filter(todo => todo.completed);
    }

    getActiveTodos() {
        return this.todos.filter(todo => !todo.completed);
    }

    clearCompleted() {
        this.todos = this.todos.filter(todo => !todo.completed);
    }

    toJSON() {
        return {
            name: this.name,
            todos: this.todos.map(todo => TodoSerializer.toJSON(todo))
        };
    }

    static fromJSON(data) {
        const project = new Project(data.name);
        project.todos = data.todos.map(todoData => TodoSerializer.fromJSON(todoData));
        return project;
    }
} 