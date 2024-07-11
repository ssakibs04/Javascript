// Example of JavaScript Control Flow

// Conditional Statements
// if-else statement
let time = 10;

if (time < 12) {
  console.log("Good morning!"); // This will run if time is less than 12
} else if (time < 18) {
  console.log("Good afternoon!"); // This will run if time is less than 18 but greater than or equal to 12
} else {
  console.log("Good evening!"); // This will run if time is greater than or equal to 18
}

// switch statement
let day = 3;

switch (day) {
  case 1:
    console.log("Today is Monday.");
    break; // Exits the switch statement
  case 2:
    console.log("Today is Tuesday.");
    break;
  case 3:
    console.log("Today is Wednesday."); // This will run since day is 3
    break;
  case 4:
    console.log("Today is Thursday.");
    break;
  case 5:
    console.log("Today is Friday.");
    break;
  default:
    console.log("It's the weekend!"); // Runs if day doesn't match any case
}