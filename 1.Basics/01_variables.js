// Declaring a variable using 'var'. This variable can be reassigned.
var name = 'saman sakib';
console.log(name); // Output: saman sakib

// Declaring a variable using 'let'. This variable can also be reassigned but is block-scoped.
let age = 25;
console.log(age); // Output: 25

// Declaring a constant variable using 'const'. This variable cannot be reassigned.
const birthYear = 1997;
console.log(birthYear); // Output: 1997

// Reassigning variables
name = 'saman shihab';
age = 28;
// birthYear = 1995; // This will cause an error because 'birthYear' is a constant.

console.log(name); // Output: saman shihab
console.log(age); // Output: 28
