
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
//console.log(obj4);





const instaUser = [
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
console.log(instaUser[2].email)

console.log(Object.keys(fbUser))
console.log(Object.values(fbUser))
console.log(Object.entries(fbUser))

console.log(fbUser.hasOwnProperty('name'))

const course = {
    coursename: "Javascript with notes",
    price: "555",
    courseInstructor: "Sakib"
};

// // Using object destructuring to extract a property
const {courseInstructor} = course;
console.log(courseInstructor); // Output: Sakib

// // Example of an array of objects (this part is just a placeholder)
const exampleArray = [
    {},
    {},
    {}
];

console.log(exampleArray);