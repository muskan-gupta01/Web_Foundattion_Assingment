# Assignment 57: Bug Log

## Project Name

Student Study Planner

## Objective

To identify, document and fix bugs found during the testing of the Student Study Planner application.

## Bug Report

| Bug ID | Issue                                            | Cause                                               | Fix                                             | Verification                              |
| ------ | ------------------------------------------------ | --------------------------------------------------- | ----------------------------------------------- | ----------------------------------------- |
| BUG01  | Tasks disappeared after refreshing the page      | Tasks were stored only in a JavaScript array        | Implemented LocalStorage                        | Refresh the browser and check saved tasks |
| BUG02  | Dashboard counters were not updating             | Dashboard was not refreshed after task operations   | Added updateDashboard() function                | Add, complete and delete tasks            |
| BUG03  | Editing a task was not working properly          | Existing task details were not loaded into the form | Updated editTask() function                     | Edit a task and check updated details     |
| BUG04  | Task filters were not displaying correct results | Filter conditions were missing                      | Added All, Pending and Completed filters        | Test all three filter options             |
| BUG05  | Empty task details could be submitted            | Input validation was insufficient                   | Added required fields and JavaScript validation | Try submitting an empty form              |

## Bug Fix Summary

The following improvements were included:

1. LocalStorage was implemented to preserve tasks after refreshing the browser.
2. Dashboard counters were connected with task operations.
3. Edit functionality was improved.
4. Task filtering was implemented.
5. Required field validation was added.

## Verification Process

Each reported issue should be tested again after applying its fix.

* Add a new task and refresh the page.
* Edit an existing task.
* Mark a task as completed and undo it.
* Delete a task.
* Test all available filters.
* Check dashboard counters after every operation.

## Conclusion

The bug log documents the issues identified during testing, their causes and the solutions applied.

The Student Study Planner was improved to provide better functionality, reliability and user experience.
