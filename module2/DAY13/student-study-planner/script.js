// Student Study Planner

console.log("Student Study Planner is running!");

let tasks = [];

function updateDashboard() {
    document.getElementById("totalTasks").textContent = tasks.length;

    document.getElementById("pendingTasks").textContent =
        tasks.filter(task => !task.completed).length;

    document.getElementById("completedTasks").textContent =
        tasks.filter(task => task.completed).length;
}

updateDashboard();