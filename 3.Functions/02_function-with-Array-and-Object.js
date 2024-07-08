// Function to return all arguments passed to it
function calculator(...num1) {
    // The rest parameter syntax allows us to represent an indefinite number of arguments as an array
    return num1;
}

// Call calculator function with multiple arguments and log the result
console.log(calculator(111, 151, 5, 15, 1, 51, 5)); // Output: [111, 151, 5, 15, 1, 51, 5]


// Object representing a user's name
const userName = {
    firstName: "Sadman",
    lastName: "Sakib"
};

// Function to print the full name of the user
function getName(fullName) {
    // Access and print the first name, last name, and full name using template literals
    console.log(`First Name is ${fullName.firstName} and Last Name is ${fullName.lastName} so user's full name is ${fullName.firstName} ${fullName.lastName}`);
}

// Call getName function with userName object
getName(userName); // Output: First Name is Sadman and Last Name is Sakib so user's full name is Sadman Sakib


// Array containing some numbers
const myNewArray = [200, 400, 100, 600];

// Function to return the second value of an array
function returnSecondValue(getArray) {
    // Return the second element of the array (index 1)
    return getArray[1];
}

// Call returnSecondValue function with myNewArray and log the result
console.log(returnSecondValue(myNewArray)); // Output: 400
