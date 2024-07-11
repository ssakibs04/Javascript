// Using for...of loop with arrays and strings

const arr = [1, 2, 3, 4, 5, 6];
for (const num of arr) {
  console.log(num); // Logs each number in the array
}

const myName = "SADMAN";
for (const letter of myName) {
  console.log(letter); // Logs each character in the string
}

// Using map method
// Creates a new array by applying a function to each element of the original array

const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers); // Outputs: [1, 4, 9, 16, 25]

// Using forEach method
// Executes a provided function once for each array element

numbers.forEach(num => {
  console.log(num * 2); // Logs double the value of each number in the array
});

// Using forEach with a named function
function logDouble(num) {
  console.log(num * 2);
}

numbers.forEach(logDouble); // Logs double the value of each number using a named function
