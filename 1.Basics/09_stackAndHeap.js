//stack(premitive)
//Copy From Memory

let a ="dsds"

let b = a

a="lala"
console.log(a);/// print dsds
console.log(b);/// print lala


//heap(non-premitive)
// Take REferance  from memory
let user1={
    email:"sa@gmail.com",
    username:"sakib"
}
let user2  = user1
user1.email="ee@gmail.com"

console.log(user1) // print  "ee@gmail.com"
console.log(user2) // print  "ee@gmail.com"