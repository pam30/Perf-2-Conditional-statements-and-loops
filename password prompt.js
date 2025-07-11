// passwordPrompt.js

const correctPassword = "pammy30";

let userPassword;

// Keep asking until the correct password is entered
do {
    userPassword = prompt("Enter your password:");
} while (userPassword !== correctPassword);

// Log a success message
console.log("Access granted!");

// Reference:
// JavaScript do...while loop documentation:
// Mozilla Developer Network (MDN): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while
