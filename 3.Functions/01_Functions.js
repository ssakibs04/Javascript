// Function definition for printing "hello"
 function name (){
   console.log("hello")
 }
name() // Calling the function name to print "hello"

// Function definition for adding two numbers
function addTwoNumbers(num1, num2) {
    // Uncommented and improved version to return the sum of num1 and num2
    // return num1 + num2;
    let result = num1 + num2; // Store the sum of num1 and num2 in result variable
    return result; // Return the result
}
    
let result = addTwoNumbers(151, 4654); // Call addTwoNumbers function with arguments 151 and 4654
console.log(`result is : ${result}`); // Output the result of addition

// Function definition for subtracting two numbers
function sub(num1, num2) {
    return `Result : ${num2 - num1}`; // Return a string with the result of num2 - num1
}
let result2 = sub(45, 54); // Call sub function with arguments 45 and 54
console.log(result2); // Output the result of subtraction

// Function definition for logging in a user
// function logIn(userName){
//     return logInMessege = userName
// }
// let name = "Sakib"
// console.log(`${name} is loggedIn`)

// Corrected and uncommented version of logIn function
function login(userName) {
    return `${userName} is logged in`; // Return a string indicating the user is logged in
}
let name = "Sakib";
console.log(login(name)); // Output "Sakib is logged in"
