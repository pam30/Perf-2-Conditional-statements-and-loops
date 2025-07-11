let age = 15;

if (isNaN(age) || age < 0) {
    console.log("Invalid input. Please enter a valid age.");
} else {
    if (age < 13) {
        console.log("You are a child.");
    } else if (age >= 13 && age <= 19) {
        console.log("You are a teenager.");
    } else {
        console.log("You are an adult.");
    }
}
