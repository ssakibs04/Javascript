const myArr = [1,2,3,4,5,6]
console.log(myArr);
console.log(myArr[3])


//Methods
myArr.push(7)//add in last index
console.log(myArr);

myArr.pop()//  delete the last index value
console.log(myArr);

myArr.unshift(10)//add in 0 index
console.log(myArr);

myArr.shift()// delete the 0 index value
console.log(myArr);

console.log(myArr.includes(4))//search 4 in array

console.log(myArr.indexOf(2))// index number

const newArr = myArr.join()
console.log(newArr)//print arrays in string

const a = myArr.slice(1,4)// print only 1,2,3 index value , 4 will not print 
console.log(a)

const b =myArr.splice(1,5)//print from 1 to 5 indec value
console.log(b);