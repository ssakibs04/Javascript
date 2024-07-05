const mySum = Symbol("Key1");

const user1 = {
    name: "Sakib",
    age: 24,
    gender: "Male",
    email: "sakib@gmail.com",
    [mySum]: "key1",
    salary: function() {
        console.log(`Hello ${this.name}, your salary is 330k`);
    }
};

// Displaying property values
console.log(user1.name); // string
console.log([user1.name]); // object (array with one element)

// Attempting to change email property before freezing the object
user1.email = "Sakib@yahoo.com"; // This will change the email

// Freezing the object to prevent further modifications
Object.freeze(user1);

// Trying to add a new property after freezing (this won't work)
user1.newProperty = "This won't be added";

// Trying to change the email after freezing (this won't work)
user1.email = "newemail@gmail.com";
// Calling the salary method
user1.salary();
// Displaying the user1 object
console.log(user1);


