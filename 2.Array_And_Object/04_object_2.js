

// const users = [
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
//     {
//         id: 2,
//         email: "i@gmail.com"
//     },
//     {
//         id: 3,
//         email: "j@gmail.com"
//     },
// ];

// // Accessing an array element's property
// console.log(users[1].email); // Output: i@gmail.com

// // Working with object keys, values, and entries
// console.log(Object.keys(tinderUser)); // Output: ["id", "name", "isLoggedIn"]
// console.log(Object.values(tinderUser)); // Output: ["123abc", "Sammy", false]
// console.log(Object.entries(tinderUser)); // Output: [["id", "123abc"], ["name", "Sammy"], ["isLoggedIn", false]]

// // Checking if an object has a specific property
// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // Output: true

// const course = {
//     coursename: "js in hindi",
//     price: "999",
//     courseInstructor: "hitesh"
// };

// // Using object destructuring to extract a property
// const {courseInstructor: instructor} = course;
// console.log(instructor); // Output: hitesh

// // Example of an array of objects (this part is just a placeholder)
// const exampleArray = [
//     {},
//     {},
//     {}
// ];

// console.log(exampleArray);
const fbUser = {}
fbUser.id = "ssakib04"
fbUser.name = "Sakib"
fbUser.gender = "Male"
fbUser.isLogedIn = true;

//   console.log(fbUser);

const userDetails = {

email :"sakib@yahoo.com",
fullName:{
    userfullName:{
        firstName:"Sadman",
        lastName:"Sakib"
    }
}
}
// console.log(userDetails.fullName.userfullName.firstName);

const obj1 = { 1:"a" , 2:"B"};
const obj2 = { 3:"c" , 4:"D"};
const obj3 = { 5:"e" , 6:"F"};


const obj4 =Object.assign(obj1,obj2,obj3)
// const obj4 = {...obj1, ...obj2, ...obj3}
console.log(obj4);





const fbUser = [
{
    id: 222,
    email: "ioio@Highlight.com"
},

{
    id: 333,
    email: "lala@Highlight.com"
},

{
    id: 222,
    email: "haha@Highlight.com"
}

]
console.log(fbUser[2].email)