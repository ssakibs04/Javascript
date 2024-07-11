// Looping Statements
// for loop
for (let i = 0; i < 5; i++) {
    console.log("Iteration number: " + i); // Runs 5 times from 0 to 4
  }
  
  // while loop
  let count = 0;
  
  while (count < 5) {
    console.log("Count is: " + count); // Runs 5 times from 0 to 4
    count++;
  }
  
  // do-while loop
  let n = 0;
  
  do {
    console.log("Number is: " + n); // Runs 5 times from 0 to 4
    n++;
  } while (n < 5);
  
  // break and continue
  for (let j = 0; j < 10; j++) {
    if (j === 5) {
      break; // Exits the loop when j is 5
    }
    console.log("j is: " + j); // Runs from 0 to 4
  }
  
  for (let k = 0; k < 10; k++) {
    if (k % 2 === 0) {
      continue; // Skips the rest of the loop when k is even
    }
    console.log("k is: " + k); // Runs only for odd numbers
  }
  
  // Function with control flow
  function checkNumber(num) {
    if (num > 0) {
      return "Positive number"; // Returns if num is positive
    } else if (num < 0) {
      return "Negative number"; // Returns if num is negative
    } else {
      return "Zero"; // Returns if num is zero
    }
  }
  
  console.log(checkNumber(5)); // Outputs: Positive number
  console.log(checkNumber(-3)); // Outputs: Negative number
  console.log(checkNumber(0)); // Outputs: Zero



  for (let i = 0; i < 10; i++) {
    const element = i;
    if (element == 5){
        console.log(`The number is ${element}`)
    }
    console.log(element);
    
    
  }


  for (let i = 0; i <=10; i++) {
    console.log(`Inner loog${i}`)
    for (let j = 0; j <=10; j++) {
        console.log(i +`*`+ j +`=`+ i*j)
        
    }
    
  }