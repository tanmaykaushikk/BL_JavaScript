/* Array Methods :- In JavaScript, arrays come with built-in methods that make it easier to manipulate and interact with the data.*/

//1) Adding / Removing Elements 
const arr = [1,2];
// push 
arr.push(3);
console.log(arr);
// pop
arr.pop();
console.log(arr);
//unshift
arr.unshift(0);
console.log(arr);
//shift
arr.shift();
console.log(arr);


const array = [1,2,3];
array.splice(1,1,'a'); // (starting index , number of items to be replaced, from what)
console.log(array);

const merged = arr.concat(array); //merges 2 array
console.log(merged);
