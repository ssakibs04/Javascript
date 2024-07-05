// Creating an empty object and adding properties
const tinderUser = {};
tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// Displaying the tinderUser object
console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
};

// Accessing nested object properties
console.log(regularUser.fullname.userfullname.firstname); // Output: hitesh

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};
const obj4 = {5: "a", 6: "b"};

// Merging objects using spread operator
const obj3 = {...obj1, ...obj2, ...obj4};
console.log(obj3); // Output: {1: "a", 2: "b", 3: "a", 4: "b", 5: "a", 6: "b"}

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "i@gmail.com"
    },
    {
        id: 3,
        email: "j@gmail.com"
    },
];

// Accessing an array element's property
console.log(users[1].email); // Output: i@gmail.com

// Working with object keys, values, and entries
console.log(Object.keys(tinderUser)); // Output: ["id", "name", "isLoggedIn"]
console.log(Object.values(tinderUser)); // Output: ["123abc", "Sammy", false]
console.log(Object.entries(tinderUser)); // Output: [["id", "123abc"], ["name", "Sammy"], ["isLoggedIn", false]]

// Checking if an object has a specific property
console.log(tinderUser.hasOwnProperty('isLoggedIn')); // Output: true

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
};

// Using object destructuring to extract a property
const {courseInstructor: instructor} = course;
console.log(instructor); // Output: hitesh

// Example of an array of objects (this part is just a placeholder)
const exampleArray = [
    {},
    {},
    {}
];

console.log(exampleArray);
