// Stack example: primitive types
let a = 10;
let b = a;
b = 20;
console.log(a); // Output: 10 (a is not affected by the change to b)
console.log(b); // Output: 20

// Heap example: reference types
let obj1 = { value: 10 };
let obj2 = obj1;
obj2.value = 20;
console.log(obj1.value); // Output: 20 (obj1 is affected by the change to obj2)
console.log(obj2.value); // Output: 20
