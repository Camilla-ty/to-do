# Todo List Application

A modern JavaScript Todo List application built with Webpack, featuring a clean UI and local storage persistence.

## Features

- ✅ Add new todos
- ✅ Mark todos as complete/incomplete
- ✅ Delete todos
- ✅ Persistent storage using localStorage
- ✅ Modern, responsive UI
- ✅ Modular architecture with ES6 modules

## Project Structure

```
Todo List/
├── src/
│   ├── index.js          # Main entry point
│   ├── style.css         # Application styles
│   └── modules/
│       ├── todo.js       # Todo item class
│       ├── project.js    # Project/todo collection management
│       ├── storage.js    # Local storage operations
│       └── dom.js        # DOM manipulation and UI logic
├── dist/
│   └── index.html        # HTML entry point
├── webpack.config.js     # Webpack configuration
├── package.json          # Dependencies and scripts
└── README.md            # This file
```

## Setup Instructions

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Development mode:**
   ```bash
   npm run dev
   ```
   This will start the development server at `http://localhost:8080`

3. **Production build:**
   ```bash
   npm run build
   ```
   This will create optimized files in the `dist/` folder

## Usage

- **Add a todo:** Type in the input field and press Enter or click "Add Todo"
- **Complete a todo:** Click the checkbox next to any todo item
- **Delete a todo:** Click the "Delete" button on any todo item
- **Data persistence:** All todos are automatically saved to localStorage

## Technologies Used

- **Webpack 5** - Module bundler
- **CSS Loader & Style Loader** - CSS processing
- **ES6 Modules** - Modern JavaScript module system
- **LocalStorage API** - Data persistence
- **Vanilla JavaScript** - No frameworks, pure JS

## Development

The application uses a modular architecture:

- `Todo` class: Represents individual todo items
- `Project` class: Manages collections of todos
- `Storage` class: Handles localStorage operations
- `DOM` class: Manages UI interactions and rendering

All data is automatically saved to localStorage and restored when the page is reloaded. # to-do
