// Store all tasks
let tasks = [];

// Select HTML elements
const taskForm = document.getElementById("taskForm");
const taskList = document.getElementById("taskList");

const totalTasks = document.getElementById("totalTasks");
const pendingTasks = document.getElementById("pendingTasks");
const completedTasks = document.getElementById("completedTasks");


// Add New Task
taskForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const title = document.getElementById("taskTitle").value.trim();
    const subject = document.getElementById("taskSubject").value.trim();
    const date = document.getElementById("taskDate").value;

    if (!title || !subject || !date) {
        alert("Please fill all the fields.");
        return;
    }

    const newTask = {
        id: Date.now(),
        title: title,
        subject: subject,
        date: date,
        completed: false
    };

    tasks.push(newTask);

    renderTasks();
    updateDashboard();

    taskForm.reset();

});


// Display Tasks
function renderTasks() {

    taskList.innerHTML = "";

    if (tasks.length === 0) {

        taskList.innerHTML =
            '<p class="empty-message">No tasks added yet.</p>';

        return;
    }

    tasks.forEach(function(task) {

        const card = document.createElement("div");
        card.className = "task-card";

        if (task.completed) {
            card.classList.add("completed");
        }

        // Task Title
        const title = document.createElement("h3");
        title.textContent = task.title;

        // Subject
        const subject = document.createElement("p");
        subject.textContent = "Subject: " + task.subject;

        // Due Date
        const date = document.createElement("p");
        date.textContent = "Due Date: " + task.date;

        // Status
        const status = document.createElement("p");
        status.textContent = task.completed
            ? "Status: Completed"
            : "Status: Pending";


        // Complete / Undo Button
        const completeButton = document.createElement("button");

        completeButton.textContent = task.completed
            ? "Undo"
            : "Complete";

        completeButton.className = "complete-btn";

        completeButton.addEventListener("click", function() {
            toggleComplete(task.id);
        });


        // Edit Button
        const editButton = document.createElement("button");

        editButton.textContent = "Edit";
        editButton.className = "edit-btn";

        editButton.addEventListener("click", function() {
            editTask(task.id);
        });


        // Delete Button
        const deleteButton = document.createElement("button");

        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-btn";

        deleteButton.addEventListener("click", function() {
            deleteTask(task.id);
        });


        // Add Elements to Card
        card.appendChild(title);
        card.appendChild(subject);
        card.appendChild(date);
        card.appendChild(status);
        card.appendChild(completeButton);
        card.appendChild(editButton);
        card.appendChild(deleteButton);

        taskList.appendChild(card);

    });

}


// Complete or Undo Task
function toggleComplete(id) {

    const task = tasks.find(function(item) {
        return item.id === id;
    });

    if (task) {
        task.completed = !task.completed;
    }

    renderTasks();
    updateDashboard();

}


// Edit Task
function editTask(id) {

    const task = tasks.find(function(item) {
        return item.id === id;
    });

    if (!task) return;

    const newTitle = prompt("Enter new task title:", task.title);

    if (newTitle === null || newTitle.trim() === "") {
        return;
    }

    const newSubject = prompt("Enter new subject:", task.subject);

    if (newSubject === null || newSubject.trim() === "") {
        return;
    }

    task.title = newTitle.trim();
    task.subject = newSubject.trim();

    renderTasks();

}


// Delete Task
function deleteTask(id) {

    const confirmation = confirm(
        "Are you sure you want to delete this task?"
    );

    if (confirmation) {

        tasks = tasks.filter(function(task) {
            return task.id !== id;
        });

        renderTasks();
        updateDashboard();

    }

}


// Update Dashboard Counters
function updateDashboard() {

    totalTasks.textContent = tasks.length;

    const completed = tasks.filter(function(task) {
        return task.completed;
    }).length;

    completedTasks.textContent = completed;

    pendingTasks.textContent = tasks.length - completed;

}


// Initial Display
renderTasks();
updateDashboard();