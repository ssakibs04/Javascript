// An Immediately Invoked Function Expression (IIFE) that prints a name
(function name() {
    // Printing the name "Sadman Sakib"
    console.log("Sadman Sakib");
})();
// The function is defined and immediately invoked, hence the use of ()

// Another IIFE that prints an age
(function age() {
    // Printing the age "23"
    console.log("23");
})();
// Similar to the previous function, this one is also defined and immediately invoked

//Example 1: IIFE with Parameters

(function greet(name) {
    console.log("Hello, " + name + "!");
})("Sadman");
// This IIFE takes a parameter 'name' and immediately invokes the function with the argument "Sadman"


//Example 2: IIFE for Creating Local Scope

// Variables inside the IIFE are not accessible from the outside
(function() {
    let localVariable = "I'm local!";
    console.log(localVariable); // Logs "I'm local!"
})();

// Uncommenting the next line would cause a ReferenceError because 'localVariable' is not defined outside the IIFE
// console.log(localVariable);


//Example 3: IIFE with Return Value

let result = (function() {
    let num1 = 5;
    let num2 = 10;
    return num1 + num2;
})();
console.log(result); // Logs 15, which is the result of the IIFE
