let firstName = 'saman';
let lastName = 'sakib';

// Concatenation
let fullName = firstName + ' ' + lastName;
console.log(fullName); // Output: saman sakib

// Template literals
fullName = `${firstName} ${lastName}`;
console.log(fullName); // Output: saman sakib

// String length
console.log(fullName.length); // Output: 10

// Accessing characters
console.log(fullName[0]); // Output: s

// Changing case
console.log(fullName.toUpperCase()); // Output: SAMAN SAKIB
console.log(fullName.toLowerCase()); // Output: saman sakib

// Substring
console.log(fullName.substring(0, 5)); // Output: saman

// Split
let namesArray = fullName.split(' ');
console.log(namesArray); // Output: ['saman', 'sakib']
