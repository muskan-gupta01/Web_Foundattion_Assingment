// Assignment 32: Profile Summary Generator

const profile = {
    name: "Muskan Gupta",
    age: 20,
    course: "BCA Artificial Intelligence",
    university: "Invertis University",

    skills: ["Python", "JavaScript", "HTML", "CSS"],

    address: {
        city: "Bareilly",
        state: "Uttar Pradesh"
    },

    education: {
        qualification: "Undergraduate",
        graduationYear: 2028
    }
};

// 1. Display profile details
console.log("PROFILE SUMMARY");
console.log("----------------");

console.log("Name:", profile.name);
console.log("Age:", profile.age);
console.log("Course:", profile.course);
console.log("University:", profile.university);

// 2. Object.keys()
console.log("\nProfile Properties:");
console.log(Object.keys(profile));

// 3. Object.values()
console.log("\nProfile Values:");
console.log(Object.values(profile));

// 4. Object.entries()
console.log("\nProfile Entries:");
console.log(Object.entries(profile));

// 5. Display skills
console.log("\nSkills:");

profile.skills.forEach(function(skill) {
    console.log("- " + skill);
});

// 6. Display address
console.log("\nAddress:");
console.log(profile.address.city);
console.log(profile.address.state);

// 7. Add a new property
profile.email = "muskan@example.com";

console.log("\nUpdated Email:", profile.email);

// 8. Update profile using spread operator
const updatedProfile = {
    ...profile,
    age: 21,
    course: "BCA Artificial Intelligence - Updated"
};

console.log("\nUpdated Profile:");
console.log(updatedProfile);

// 9. Destructuring
const { name, university } = profile;

console.log("\nDestructured Details:");
console.log("Name:", name);
console.log("University:", university);

// 10. Check property
console.log("\nHas Skills Property:", profile.hasOwnProperty("skills"));