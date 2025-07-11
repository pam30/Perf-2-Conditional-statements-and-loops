
let day = prompt("Enter a day of the week (e.g., Monday, Tuesday):");
let dayLower = day.toLowerCase();

switch (dayLower) {
    case "monday":
        console.log("Task for Monday: Morning workout and grocery shopping.");
        break;
    case "tuesday":
        console.log("Task for Tuesday: Study JavaScript and complete assignments.");
        break;
    case "wednesday":
        console.log("Task for Wednesday: Clean the house and do laundry.");
        break;
    case "thursday":
        console.log("Task for Thursday: Visit the library and read.");
        break;
    case "friday":
        console.log("Task for Friday: Movie night with friends.");
        break;
    case "saturday":
        console.log("Task for Saturday: Outdoor walk and meditation.");
        break;
    case "sunday":
        console.log("Task for Sunday:Church day  and rest.");
        break;
    default:
        console.log("Invalid input. Please enter a valid day of the week.");
}

// Reference:
// JavaScript Switch Statement Documentation – MDN Web Docs
// Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
