export class Storage {
    constructor(key = 'todo-app-data') {
        this.key = key;
    }

    save(project) {
        try {
            const data = project.toJSON();
            localStorage.setItem(this.key, JSON.stringify(data));
            return true;
        } catch (error) {
            console.error('Error saving to localStorage:', error);
            return false;
        }
    }

    load() {
        try {
            const data = localStorage.getItem(this.key);
            if (data) {
                const parsedData = JSON.parse(data);
                return parsedData;
            }
            return null;
        } catch (error) {
            console.error('Error loading from localStorage:', error);
            return null;
        }
    }

    clear() {
        try {
            localStorage.removeItem(this.key);
            return true;
        } catch (error) {
            console.error('Error clearing localStorage:', error);
            return false;
        }
    }

    exists() {
        return localStorage.getItem(this.key) !== null;
    }
} 