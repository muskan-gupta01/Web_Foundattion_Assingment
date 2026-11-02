# Assignment 51 – Wireframes and Documented User Flow

## Project Name: Student Study Planner

## 1. Introduction

A wireframe is a basic visual representation of a website or application layout. It shows the placement of different elements before the actual development begins.

This assignment includes the wireframes and user flow of the Student Study Planner application.

## 2. Wireframe 1 – Dashboard Page

```text
--------------------------------------------------
              STUDENT STUDY PLANNER
--------------------------------------------------
 Dashboard        My Tasks        About
--------------------------------------------------

 Welcome, Student!

 Your Study Overview

 -----------------------------------------------
 | Total Tasks | Pending Tasks | Completed Tasks |
 |     10      |       6       |       4         |
 -----------------------------------------------

              Recent Tasks

 -----------------------------------------------
 | Complete HTML Assignment       | Pending      |
 | Prepare JavaScript Notes       | Completed    |
 | Revise CSS Concepts            | Pending      |
 -----------------------------------------------

             [ View All Tasks ]

--------------------------------------------------
                 Footer
--------------------------------------------------
```

## 3. Wireframe 2 – Add Task Page

```text
--------------------------------------------------
              STUDENT STUDY PLANNER
--------------------------------------------------

                 ADD NEW TASK

 Task Name:
 [ Enter task name                    ]

 Description:
 [ Enter task description             ]

 Due Date:
 [ Select date                        ]

 Priority:
 [ Select priority                    ]

              [ Add Task ]

--------------------------------------------------
```

## 4. Wireframe 3 – My Tasks Page

```text
--------------------------------------------------
              STUDENT STUDY PLANNER
--------------------------------------------------

                  MY TASKS

 [ All ] [ Pending ] [ Completed ]

              [ Add New Task ]

--------------------------------------------------
 Task Name              Status       Actions
--------------------------------------------------
 HTML Assignment        Pending      Edit | Delete
 JavaScript Notes       Completed    Edit | Delete
 CSS Revision           Pending      Edit | Delete
--------------------------------------------------

--------------------------------------------------
```

## 5. Wireframe 4 – About Page

```text
--------------------------------------------------
              STUDENT STUDY PLANNER
--------------------------------------------------

                  ABOUT US

 Student Study Planner helps students organize
 their daily study activities and assignments.

 Features:
 - Add and manage tasks
 - Track completed activities
 - Filter pending tasks
 - Save tasks using localStorage

              Thank You!
--------------------------------------------------
```

## 6. Documented User Flow

The user flow describes the steps followed by a user while interacting with the application.

### Step-by-Step Flow

1. The user opens the Student Study Planner website.
2. The Dashboard page appears.
3. The user views the total, pending and completed tasks.
4. The user opens the My Tasks section.
5. The user clicks the Add New Task button.
6. The user enters the task name, description, due date and priority.
7. The user clicks the Add Task button.
8. The new task appears in the task list.
9. The user can edit or delete an existing task.
10. The user can mark a task as completed.
11. The user can filter tasks into All, Pending and Completed.
12. The application saves task information in localStorage.
13. When the user refreshes the page, previously saved tasks are displayed.

## 7. User Flow Diagram

```text
          START
            |
            v
       Open Website
            |
            v
        Dashboard
            |
            v
         My Tasks
            |
            v
        Add New Task
            |
            v
       Enter Task Details
            |
            v
        Save Task
            |
            v
       Display Task List
            |
            v
     Manage Existing Tasks
            |
       ----------------
       |              |
       v              v
   Edit Task      Delete Task
       |
       v
   Update Task
       |
       v
   Save in localStorage
       |
       v
         END
```

## 8. Design Considerations

* Simple and clean user interface.
* Easy navigation between pages.
* Clear buttons and labels.
* Responsive layout for different screen sizes.
* Consistent colors and typography.
* Easy access to task management features.

## 9. Conclusion

Wireframes help in planning the structure and layout of an application before development.

The documented user flow explains how users interact with the Student Study Planner.

These designs will serve as a guide during the development of the project.
