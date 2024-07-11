const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

// Filtering books by genre 'History'
let userBooks = books.filter((bk) => bk.genre === 'History');
console.log("Books with genre 'History':", userBooks);

// Filtering books by genre 'History' and published after or in 1995
userBooks = books.filter((bk) => {
    return bk.publish >= 1995 && bk.genre === 'History';
});
console.log("Books with genre 'History' and published after or in 1995:", userBooks);





// Using reduce with an array of numbers
const myNums = [1, 2, 3];

// Using reduce with a callback function and initial value of 0
const myTotal = myNums.reduce((acc, curr) => {
  return acc + curr; // Add the current value to the accumulator
}, 0);

console.log(myTotal); // Outputs: 6






// Using reduce with an array of objects
const shoppingCart = [
  {
    itemName: "js course",
    price: 2999
  },
  {
    itemName: "py course",
    price: 999
  },
  {
    itemName: "mobile dev course",
    price: 5999
  },
  {
    itemName: "data science course",
    price: 12999
  },
];

// Using reduce to calculate the total price to pay
const priceToPay = shoppingCart.reduce((acc, item) => {
  return acc + item.price; // Add the price of the current item to the accumulator
}, 0);

console.log(priceToPay); // Outputs: 22996
