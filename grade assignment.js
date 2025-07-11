// gradeAssignment.js

// Prompt the user to input their score
let score = prompt("Enter your score:");

// Convert the input to a number
score = Number(score);

// Check the score and assign a grade using else-if statements
if (score >= 90) {
    console.log("Grade: Excellent");
} else if (score >= 80) {
    console.log("Grade: Good");
} else if (score >= 70) {
    console.log("Grade: Fair");
} else {
    console.log("Grade: Needs Improvement");
}

// Reference:
// JavaScript if...else Statement Documentation
// Source: Mozilla Developer Network (MDN)
// URL: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
