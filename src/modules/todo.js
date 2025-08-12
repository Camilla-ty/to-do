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
} 