// Load saved tasks from LocalStorage
let tasks = JSON.parse(localStorage.getItem("studyTasks")) || [];

let editingTaskId = null;

const taskForm = document.getElementById("taskForm");
const taskList = document.getElementById("taskList");
const taskFilter = document.getElementById("taskFilter");

const totalTasks = document.getElementById("totalTasks");
const pendingTasks = document.getElementById("pendingTasks");
const completedTasks = document.getElementById("completedTasks");

const submitBtn = document.getElementById("submitBtn");


// Save tasks in LocalStorage
function saveTasks() {
    localStorage.setItem("studyTasks", JSON.stringify(tasks));
}


// Add or Update Task
taskForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const title = document.getElementById("taskTitle").value.trim();
    const subject = document.getElementById("taskSubject").value.trim();
    const date = document.getElementById("taskDate").value;

    if (!title || !subject || !date) {
        alert("Please fill all fields.");
        return;
    }

    if (editingTaskId !== null) {

        const task = tasks.find(function(item) {
            return item.id === editingTaskId;
        });

        if (task) {
            task.title = title;
            task.subject = subject;
            task.date = date;
        }

        editingTaskId = null;
        submitBtn.textContent = "Add Task";

    } else {

        const newTask = {
            id: Date.now(),
            title: title,
            subject: subject,
            date: date,
            completed: false
        };

        tasks.push(newTask);
    }

    saveTasks();
    renderTasks();
    updateDashboard();
    taskForm.reset();
});


// Display Tasks
function renderTasks() {

    taskList.innerHTML = "";

    const filterValue = taskFilter.value;

    let filteredTasks = tasks.filter(function(task) {

        if (filterValue === "pending") {
            return !task.completed;
        }

        if (filterValue === "completed") {
            return task.completed;
        }

        return true;
    });

    if (filteredTasks.length === 0) {
        taskList.innerHTML =
            '<p class="empty-message">No tasks found.</p>';
        return;
    }

    filteredTasks.forEach(function(task) {

        const card = document.createElement("div");
        card.className = "task-card";

        if (task.completed) {
            card.classList.add("completed");
        }

        const title = document.createElement("h3");
        title.textContent = task.title;

        const subject = document.createElement("p");
        subject.textContent = "Subject: " + task.subject;

        const date = document.createElement("p");
        date.textContent = "Due Date: " + task.date;

        const status = document.createElement("p");
        status.textContent = task.completed
            ? "Status: Completed"
            : "Status: Pending";

        // Complete / Undo
        const completeButton = document.createElement("button");

        completeButton.textContent = task.completed
            ? "Undo"
            : "Complete";

        completeButton.className = "complete-btn";

        completeButton.addEventListener("click", function() {
            toggleComplete(task.id);
        });

        // Edit
        const editButton = document.createElement("button");

        editButton.textContent = "Edit";
        editButton.className = "edit-btn";

        editButton.addEventListener("click", function() {
            editTask(task.id);
        });

        // Delete
        const deleteButton = document.createElement("button");

        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-btn";

        deleteButton.addEventListener("click", function() {
            deleteTask(task.id);
        });

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

    saveTasks();
    renderTasks();
    updateDashboard();
}


// Edit Task
function editTask(id) {

    const task = tasks.find(function(item) {
        return item.id === id;
    });

    if (!task) return;

    document.getElementById("taskTitle").value = task.title;
    document.getElementById("taskSubject").value = task.subject;
    document.getElementById("taskDate").value = task.date;

    editingTaskId = id;
    submitBtn.textContent = "Update Task";

    document.getElementById("tasks").scrollIntoView({
        behavior: "smooth"
    });
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

        if (editingTaskId === id) {
            editingTaskId = null;
            taskForm.reset();
            submitBtn.textContent = "Add Task";
        }

        saveTasks();
        renderTasks();
        updateDashboard();
    }
}


// Update Dashboard
function updateDashboard() {

    totalTasks.textContent = tasks.length;

    const completed = tasks.filter(function(task) {
        return task.completed;
    }).length;

    completedTasks.textContent = completed;
    pendingTasks.textContent = tasks.length - completed;
}


// Filter Tasks
taskFilter.addEventListener("change", function() {
    renderTasks();
});


// Initial Display
renderTasks();
updateDashboard();