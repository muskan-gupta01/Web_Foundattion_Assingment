# Assignment 60: Working Challenge and Architecture Explanation

## 1. Project Name

Student Study Planner

## 2. Project Overview

Student Study Planner is a web-based application designed to help students organize and manage their daily study activities.

It provides a simple interface where students can create, update, complete, delete and filter their study tasks.

The application uses browser LocalStorage to save tasks, so the data remains available even after refreshing the page.

## 3. Technologies Used

* HTML5 – To create the structure of the application.
* CSS3 – To design and style the user interface.
* JavaScript – To implement application functionality.
* LocalStorage – To store task data in the browser.

## 4. Core Features

1. Add Task – Create a new study task.
2. Edit Task – Update existing task details.
3. Complete Task – Mark a task as completed.
4. Undo Task – Change a completed task back to pending.
5. Delete Task – Remove an existing task.
6. Filter Tasks – View all, pending or completed tasks.
7. Dashboard – Display total, pending and completed task counts.
8. Data Persistence – Save tasks using LocalStorage.
9. Responsive Design – Support desktop and mobile screens.

## 5. Project Architecture

The application follows a simple client-side architecture.

### HTML Layer

The HTML file provides the structure of the application, including:

* Header and navigation
* Dashboard
* Task creation form
* Task list
* Filter options
* About section

### CSS Layer

The CSS file manages:

* Page layout
* Colors and typography
* Task cards
* Buttons and forms
* Responsive design

### JavaScript Layer

The JavaScript file handles:

* Adding new tasks
* Editing existing tasks
* Completing and deleting tasks
* Filtering tasks
* Updating dashboard counters
* Rendering task information

### Storage Layer

LocalStorage stores task information in JSON format. Saved tasks are loaded when the application opens.

## 6. Application Workflow

1. User opens the Student Study Planner.
2. JavaScript loads previously saved tasks from LocalStorage.
3. User adds, edits, completes or deletes tasks.
4. The task list is updated dynamically.
5. Dashboard counters are refreshed.
6. Updated task information is saved in LocalStorage.
7. The application displays the latest task information.

## 7. Project Folder Structure

```text
student-study-planner/
│
├── index.html
├── style.css
└── script.js
```

## 8. Testing and Verification

The following features should be tested:

| Feature           | Expected Result                   |
| ----------------- | --------------------------------- |
| Add Task          | New task appears in the list      |
| Edit Task         | Task information gets updated     |
| Complete Task     | Task status changes to completed  |
| Undo Task         | Task status changes to pending    |
| Delete Task       | Task is removed                   |
| Filter Tasks      | Correct tasks are displayed       |
| Dashboard         | Counters show correct values      |
| LocalStorage      | Tasks remain after page refresh   |
| Responsive Design | Layout adjusts to smaller screens |

## 9. Conclusion

The Student Study Planner demonstrates the practical use of HTML, CSS, JavaScript and browser LocalStorage.

It provides students with a convenient way to manage study activities and track task completion.

The project also demonstrates DOM manipulation, event handling, array methods and client-side data persistence.
