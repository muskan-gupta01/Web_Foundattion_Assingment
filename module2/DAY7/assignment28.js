// Assignment 28: Practical Array and String Operations

const students = [
    { name: "Muskan", marks: 88 },
    { name: "Ansh", marks: 75 },
    { name: "Ishika", marks: 92 },
    { name: "Agrima", marks: 65 },
    { name: "Ashna", marks: 80 }
];

// 1. Display all students
console.log("All Students:");
students.forEach(function(student) {
    console.log(student.name, "-", student.marks);
});

// 2. Students who scored above 75
const passedStudents = students.filter(function(student) {
    return student.marks > 75;
});
console.log("\nStudents Scoring Above 75:");
console.log(passedStudents);

// 3. Get only student names
const studentNames = students.map(function(student) {
    return student.name;
});
console.log("\nStudent Names:");
console.log(studentNames);

// 4. Calculate total marks
const totalMarks = students.reduce(function(total, student) {
    return total + student.marks;
}, 0);
console.log("\nTotal Marks:", totalMarks);

// 5. Calculate average marks
const average = totalMarks / students.length;
console.log("Average Marks:", average);

// 6. Find topper
const topper = students.reduce(function(top, student) {
    return student.marks > top.marks ? student : top;
});
console.log("\nTopper:", topper.name);
console.log("Topper Marks:", topper.marks);

// 7. Sort students by marks (highest first)
const sortedStudents = [...students].sort(function(a, b) {
    return b.marks - a.marks;
});
console.log("\nStudents Sorted by Marks:");
console.log(sortedStudents);

// 8. Convert student names to uppercase
const upperNames = studentNames.map(function(name) {
    return name.toUpperCase();
});
console.log("\nUppercase Names:");
console.log(upperNames);

// 9. Search for a student
const searchStudent = students.find(function(student) {
    return student.name === "Muskan";
});
console.log("\nSearch Result:");
console.log(searchStudent);

// 10. Check if all students passed (40 marks)
const allPassed = students.every(function(student) {
    return student.marks >= 40;
});
console.log("\nAll Students Passed:", allPassed);