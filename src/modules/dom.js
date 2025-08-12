import { Project } from './project.js';
import { Storage } from './storage.js';

export class DOM {
    constructor() {
        this.project = new Project();
        this.storage = new Storage();
        this.todoContainer = document.getElementById('todo-container');
        this.init();
    }

    init() {
        this.loadFromStorage();
        this.createForm();
        this.renderTodos();
        this.setupEventListeners();
    }

    createForm() {
        const form = document.createElement('form');
        form.className = 'todo-form';
        form.innerHTML = `
            <input type="text" class="todo-input" placeholder="Add a new todo..." required>
            <button type="submit" class="add-btn">Add Todo</button>
        `;
        this.todoContainer.parentNode.insertBefore(form, this.todoContainer);
    }

    setupEventListeners() {
        const form = document.querySelector('.todo-form');
        const input = document.querySelector('.todo-input');

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const text = input.value.trim();
            if (text) {
                this.addTodo(text);
                input.value = '';
            }
        });

        // Event delegation for todo items
        this.todoContainer.addEventListener('click', (e) => {
            const todoItem = e.target.closest('.todo-item');
            if (!todoItem) return;

            const todoId = todoItem.dataset.id;

            if (e.target.classList.contains('todo-checkbox')) {
                this.toggleTodo(todoId);
            } else if (e.target.classList.contains('delete-btn')) {
                this.deleteTodo(todoId);
            }
        });
    }

    addTodo(text) {
        const todo = this.project.addTodo(text);
        this.renderTodos();
        this.saveToStorage();
    }

    toggleTodo(id) {
        this.project.toggleTodo(id);
        this.renderTodos();
        this.saveToStorage();
    }

    deleteTodo(id) {
        this.project.removeTodo(id);
        this.renderTodos();
        this.saveToStorage();
    }

    renderTodos() {
        const todos = this.project.getAllTodos();
        
        if (todos.length === 0) {
            this.todoContainer.innerHTML = '<div class="empty-state">No todos yet. Add one above!</div>';
            return;
        }

        const todoList = document.createElement('ul');
        todoList.className = 'todo-list';

        todos.forEach(todo => {
            const todoItem = this.createTodoElement(todo);
            todoList.appendChild(todoItem);
        });

        this.todoContainer.innerHTML = '';
        this.todoContainer.appendChild(todoList);
    }

    createTodoElement(todo) {
        const li = document.createElement('li');
        li.className = `todo-item ${todo.completed ? 'completed' : ''}`;
        li.dataset.id = todo.id;

        li.innerHTML = `
            <input type="checkbox" class="todo-checkbox" ${todo.completed ? 'checked' : ''}>
            <span class="todo-text">${this.escapeHtml(todo.text)}</span>
            <button class="delete-btn">Delete</button>
        `;

        return li;
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    saveToStorage() {
        this.storage.save(this.project);
    }

    loadFromStorage() {
        const data = this.storage.load();
        if (data) {
            this.project = Project.fromJSON(data);
        }
    }
} 