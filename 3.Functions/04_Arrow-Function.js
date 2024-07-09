// A function that tries to print the firstName, but will cause an error
const userName = () => {
    // Declaring a variable to hold the first name
    let firstName = "Sadman";
    // Trying to log the firstName using 'this', which is incorrect in this context
    console.log(this.firstName); // 'this' does not refer to the object where firstName is defined
 };
 userName(); // Calling the function to see the output
 

 // Corrected version of the userName function
 const userNameCorrected = () => {
    // Declaring a variable to hold the first name
    let firstName = "Sadman";
    // Logging the firstName directly
    console.log(firstName); // Correctly logs "Sadman"
 };
 userNameCorrected(); // Calling the corrected function
 
//************************************************************* */


 // A function that adds two numbers and returns the result
 const addTwoNumbers = (num1, num2) => {
     return num1 + num2;
 };
 console.log(addTwoNumbers(4545, 54)); // Logs 4599


 
 // A function that adds three numbers using concise arrow function syntax
 const addThreeNumbers = (num1, num2, num3) => (num1 + num2 + num3);
 console.log(addThreeNumbers(465465, 545, 65465)); // Logs 531475
 
 
 // Additional examples:
 
 // A function that multiplies two numbers
 const multiplyTwoNumbers = (num1, num2) => {
     return num1 * num2;
 };
 console.log(multiplyTwoNumbers(6, 7)); // Logs 42
 
 // A function that subtracts the second number from the first
 const subtractNumbers = (num1, num2) => {
     return num1 - num2;
 };
 console.log(subtractNumbers(100, 45)); // Logs 55
 
 // A function that divides the first number by the second
 const divideNumbers = (num1, num2) => {
     if (num2 === 0) {
         return "Cannot divide by zero"; // Handling division by zero
     }
     return num1 / num2;
 };
 console.log(divideNumbers(100, 5)); // Logs 20
 console.log(divideNumbers(100, 0)); // Logs "Cannot divide by zero"
 
 // A function to calculate the area of a rectangle
 const calculateRectangleArea = (length, width) => {
     return length * width;
 };
 console.log(calculateRectangleArea(10, 5)); // Logs 50
 
 // A function to calculate the perimeter of a rectangle
 const calculateRectanglePerimeter = (length, width) => {
     return 2 * (length + width);
 };
 console.log(calculateRectanglePerimeter(10, 5)); // Logs 30
 