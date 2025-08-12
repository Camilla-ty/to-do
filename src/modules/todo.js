export class Todo {
    constructor(text, completed = false, id = null) {
        this.id = id || Date.now().toString();
        this.text = text;
        this.completed = completed;
        this.createdAt = new Date();
    }

    toggle() {
        this.completed = !this.completed;
    }

    updateText(newText) {
        this.text = newText;
    }

    toJSON() {
        return {
            id: this.id,
            text: this.text,
            completed: this.completed,
            createdAt: this.createdAt.toISOString()
        };
    }

    static fromJSON(data) {
        const todo = new Todo(data.text, data.completed, data.id);
        todo.createdAt = new Date(data.createdAt);
        return todo;
    }
} 