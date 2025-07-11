// Prompt the user to enter their age
let age = prompt("Enter your age:");

// Convert input to number
age = Number(age);

// Check if input is a valid number
if (isNaN(age) || age < 0) {
    console.log("Invalid age. Please enter a valid number.");
} else {
    // Determine age group using if-else structure
    if (age < 13) {
        console.log("You are a child.");
    } else if (age >= 13 && age <= 19) {
        console.log("You are a teenager.");
    } else {
        console.log("You are an adult.");
    }
}

/*
References:
- JavaScript Prompt and Number Conversion:
  https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
- JavaScript if...else Statement:
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
*/
