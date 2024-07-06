const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// Using spread operator to merge both arrays
const all_new_heros = [...marvel_heros, ...dc_heros];
console.log(all_new_heros); // Output: ["thor", "Ironman", "spiderman", "superman", "flash", "batman"]

// Flattening a nested array
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array); // Output: [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

// Checking if a value is an array
console.log(Array.isArray("Hitesh")); // Output: false
console.log(Array.from("Hitesh")); // Output: ["H", "i", "t", "e", "s", "h"]
console.log(Array.from({name: "hitesh"})); // Output: [] - Objects with non-array-like structures return an empty array

// Creating an array from given values
let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3)); // Output: [100, 200, 300]
