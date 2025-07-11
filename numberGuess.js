// numberGuess.js

const correctNumber = 5; // Set a fixed number for simplicity
let guess = parseInt(prompt("Guess a number between 1 and 10:"));

while (guess !== correctNumber) {
  if (guess > correctNumber) {
    console.log("Too high!");
  } else if (guess < correctNumber) {
    console.log("Too low!");
  }
  guess = parseInt(prompt("Try again:"));
}

console.log("Correct! You guessed the number.");

// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while
