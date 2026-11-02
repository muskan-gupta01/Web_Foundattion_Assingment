# Assignment 48 – Load-Update-Save-Render Lifecycle

## 1. Introduction

The Load-Update-Save-Render lifecycle is a process used in JavaScript applications to manage and display data.

It helps applications load saved information, update it when users make changes, save the updated data and display it on the webpage.

## 2. Load

The Load stage retrieves previously saved data from browser storage.

Example:

```javascript
const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
```

Here, data is retrieved from localStorage. If no data exists, an empty array is created.

## 3. Update

The Update stage changes the existing data or adds new information based on user actions.

Example:

```javascript
tasks.push("Complete JavaScript Assignment");
```

This adds a new task to the tasks array.

## 4. Save

The Save stage stores the updated data in localStorage.

Example:

```javascript
localStorage.setItem("tasks", JSON.stringify(tasks));
```

JSON.stringify() converts the JavaScript array into a string before saving it.

## 5. Render

The Render stage displays the updated data on the webpage.

Example:

```javascript
const taskList = document.getElementById("taskList");

taskList.innerHTML = "";

tasks.forEach(function(task) {
    const li = document.createElement("li");
    li.textContent = task;
    taskList.appendChild(li);
});
```

This code displays all tasks in an HTML list.

## 6. Complete Lifecycle Example

```javascript
// 1. Load
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// 2. Update
tasks.push("Learn JavaScript");

// 3. Save
localStorage.setItem("tasks", JSON.stringify(tasks));

// 4. Render
function renderTasks() {
    const taskList = document.getElementById("taskList");

    taskList.innerHTML = "";

    tasks.forEach(function(task) {
        const li = document.createElement("li");
        li.textContent = task;
        taskList.appendChild(li);
    });
}
```

## 7. Advantages

* Data remains available after page refresh.
* Changes can be saved in browser storage.
* Updated information can be displayed immediately.
* It improves the user experience.
* It helps build applications such as To-Do Lists and Settings Panels.

## 8. Conclusion

The Load-Update-Save-Render lifecycle is an important concept in JavaScript application development.

It ensures that application data is loaded, updated, saved and displayed correctly. It is especially useful when working with localStorage and sessionStorage.
