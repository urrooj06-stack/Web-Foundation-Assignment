// Assignment 53 & 54: Capstone Architecture (MVC Setup)
// This is the core scaffold. UI (View) and Logic (Model) are decoupled.

class TaskModel {
    constructor() {
        this.tasks = JSON.parse(localStorage.getItem('capstone_tasks')) || [];
    }
    addTask(text) {
        const task = { id: Date.now(), text, completed: false };
        this.tasks.push(task);
        this._commit();
    }
    _commit() {
        localStorage.setItem('capstone_tasks', JSON.stringify(this.tasks));
    }
}

class TaskView {
    constructor() {
        this.form = document.getElementById('task-form');
        this.input = document.getElementById('task-input');
        this.list = document.getElementById('task-list');
    }
    // Rendering logic will be added here
}

class TaskController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        
        this.view.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.model.addTask(this.view.input.value);
            this.view.input.value = '';
            console.log("Task added:", this.model.tasks);
        });
    }
}

const app = new TaskController(new TaskModel(), new TaskView());
