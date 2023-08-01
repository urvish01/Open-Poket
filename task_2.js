/*
  Task 2: Data Manipulation
    Write a function in Node.js that takes an array of integers as input and returns the sum of all the numbers.
*/



// return sum of all elements
function sumOfArray(arr){
    let result = 0;

    //use for loop for sum
    arr.forEach(element => {
        result += element
    });
    return result;
}

//call sum function
let arr = [1,2,3,4,5,6,7,8,9,10]; // array for pass in function
let result = sumOfArray(arr);

console.log("Sum of All Array Element is =>", result);