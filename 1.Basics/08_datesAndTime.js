// Current date and time
let now = new Date();
console.log(now);

// Specific date
let specificDate = new Date('2020-01-01');
console.log(specificDate);

// Get year, month, day
console.log(now.getFullYear()); // Output: current year
console.log(now.getMonth() + 1); // Output: current month (0-based, so add 1)
console.log(now.getDate()); // Output: current day

// Get hours, minutes, seconds
console.log(now.getHours()); // Output: current hour
console.log(now.getMinutes()); // Output: current minute
console.log(now.getSeconds()); // Output: current second
