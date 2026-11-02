# Assignment 59: Solutions with Dry Runs and Test Cases

## Project Name

Student Study Planner

## Objective

To document practical JavaScript solutions with dry runs and test cases to understand program execution and verify expected results.

## 1. Solution: Add Two Numbers

### Code

```javascript
function addNumbers(a, b) {
    return a + b;
}

console.log(addNumbers(10, 20));
console.log(addNumbers(5, 15));
```

### Dry Run

| Step |  a |  b | Result |
| ---- | -: | -: | -----: |
| 1    | 10 | 20 |     30 |
| 2    |  5 | 15 |     20 |

### Test Cases

| Test Case | Input  | Expected Output |
| --------- | ------ | --------------- |
| TC01      | 10, 20 | 30              |
| TC02      | 5, 15  | 20              |
| TC03      | -5, 5  | 0               |

## 2. Solution: Find Even Numbers in an Array

### Code

```javascript
function findEvenNumbers(numbers) {
    return numbers.filter(function(number) {
        return number % 2 === 0;
    });
}

console.log(findEvenNumbers([1, 2, 3, 4, 5, 6]));
```

### Dry Run

| Number | Condition   | Result   |
| ------ | ----------- | -------- |
| 1      | 1 % 2 !== 0 | Excluded |
| 2      | 2 % 2 === 0 | Included |
| 3      | 3 % 2 !== 0 | Excluded |
| 4      | 4 % 2 === 0 | Included |
| 5      | 5 % 2 !== 0 | Excluded |
| 6      | 6 % 2 === 0 | Included |

Output: `[2, 4, 6]`

### Test Cases

| Test Case | Input        | Expected Output |
| --------- | ------------ | --------------- |
| TC01      | [1, 2, 3, 4] | [2, 4]          |
| TC02      | [1, 3, 5]    | []              |
| TC03      | [2, 4, 6]    | [2, 4, 6]       |

## 3. Solution: Calculate Total Marks

### Code

```javascript
function calculateTotal(marks) {
    return marks.reduce(function(total, mark) {
        return total + mark;
    }, 0);
}

console.log(calculateTotal([80, 75, 90]));
```

### Dry Run

| Step    | Current Mark | Total |
| ------- | -----------: | ----: |
| Initial |            - |     0 |
| 1       |           80 |    80 |
| 2       |           75 |   155 |
| 3       |           90 |   245 |

Output: `245`

### Test Cases

| Test Case | Input        | Expected Output |
| --------- | ------------ | --------------- |
| TC01      | [80, 75, 90] | 245             |
| TC02      | [50, 50]     | 100             |
| TC03      | []           | 0               |

## 4. Solution: Find the Highest Number

### Code

```javascript
function findHighest(numbers) {
    if (numbers.length === 0) {
        return null;
    }

    return Math.max(...numbers);
}

console.log(findHighest([10, 25, 15, 40, 30]));
```

### Dry Run

| Number | Current Highest |
| ------ | --------------: |
| 10     |              10 |
| 25     |              25 |
| 15     |              25 |
| 40     |              40 |
| 30     |              40 |

Output: `40`

### Test Cases

| Test Case | Input            | Expected Output |
| --------- | ---------------- | --------------- |
| TC01      | [10, 25, 15, 40] | 40              |
| TC02      | [5, 3, 1]        | 5               |
| TC03      | []               | null            |

## 5. Student Study Planner – Feature Test Cases

| Test Case | Feature          | Expected Result                               |
| --------- | ---------------- | --------------------------------------------- |
| TC01      | Add Task         | New task should be displayed                  |
| TC02      | Edit Task        | Updated task details should appear            |
| TC03      | Complete Task    | Task status should become Completed           |
| TC04      | Undo Task        | Task status should become Pending             |
| TC05      | Delete Task      | Selected task should be removed               |
| TC06      | Filter Pending   | Only pending tasks should appear              |
| TC07      | Filter Completed | Only completed tasks should appear            |
| TC08      | LocalStorage     | Tasks should remain after refreshing the page |

## 6. Conclusion

Dry runs help us understand how code executes step by step. Test cases help verify whether a program produces the expected output for different inputs.

These solutions demonstrate the use of JavaScript functions, arrays, filter(), reduce() and Math.max().

The Student Study Planner features are also included in the testing process to check the overall functionality of the project.
