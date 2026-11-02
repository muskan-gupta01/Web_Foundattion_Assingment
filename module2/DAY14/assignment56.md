# Assignment 56: Test Matrix and Fixes

## Project Name

Student Study Planner

## Objective

To test all major features of the Student Study Planner application, identify errors and verify that the issues are fixed.

## 1. Test Matrix

| Test ID | Feature           | Test Scenario                      | Expected Result                            |
| ------- | ----------------- | ---------------------------------- | ------------------------------------------ |
| TC01    | Add Task          | Enter valid task details           | Task should be added successfully          |
| TC02    | Add Task          | Submit empty fields                | Browser should prevent empty submission    |
| TC03    | Edit Task         | Update an existing task            | Updated details should be displayed        |
| TC04    | Complete Task     | Click Complete button              | Task status should change to Completed     |
| TC05    | Undo Task         | Click Undo button                  | Task status should change to Pending       |
| TC06    | Delete Task       | Click Delete button and confirm    | Task should be removed                     |
| TC07    | Delete Task       | Cancel delete confirmation         | Task should remain unchanged               |
| TC08    | Filter All        | Select All Tasks                   | All tasks should be displayed              |
| TC09    | Filter Pending    | Select Pending                     | Only pending tasks should appear           |
| TC10    | Filter Completed  | Select Completed                   | Only completed tasks should appear         |
| TC11    | LocalStorage      | Refresh the browser                | Previously saved tasks should remain       |
| TC12    | Dashboard         | Add and complete tasks             | Dashboard counters should update correctly |
| TC13    | Responsive Design | Open application on a small screen | Layout should adjust to screen size        |

## 2. Issues and Fixes

| Issue                                 | Cause                                      | Fix                                             |
| ------------------------------------- | ------------------------------------------ | ----------------------------------------------- |
| Tasks disappeared after refresh       | Tasks were stored only in an array         | Implemented LocalStorage                        |
| Dashboard counters did not update     | Counters were not refreshed after actions  | Added updateDashboard()                         |
| Task list showed incorrect results    | Filter logic was missing                   | Implemented task filtering                      |
| Editing required multiple steps       | Task details were not loaded into the form | Added editTask() functionality                  |
| Empty task details could be submitted | Input validation was missing               | Added required fields and JavaScript validation |

## 3. Verification

The following features are included in the Student Study Planner:

* Task creation
* Task editing
* Task completion and undo
* Task deletion
* All, Pending and Completed filters
* LocalStorage persistence
* Dashboard counter updates
* Responsive user interface

## 4. Conclusion

The Student Study Planner was tested for its main functionalities. Issues related to task storage, dashboard updates and task management were addressed.

The application provides a simple interface for students to organize and manage their daily study activities.
