let arr = [1,2,3,4,5,6,7];

// console.log(arr);
// console.log(arr.length);
// console.log(arr[0]);
// console.log(arr[2]);
// console.log(arr[4]);
// console.log(arr[6]);
// console.log(arr,typeof[arr]);

//length 
var myArray = [1, "Hello", [2, 3]];
console.log(myArray.length);

//push 
var myArray = [1, "Hello", [2, 3]];
myArray.push("World");
console.log(myArray); // [1, "Hello", [2, 3], "World"]

//pop
var myArray = [1, "Hello", [2, 3], "World"];
myArray.pop();
console.log(myArray); // [1, "Hello", [2, 3]]

//shift 
var myArray = [1, "Hello", [2, 3]];
myArray.shift();
console.log(myArray); // ["Hello", [2, 3]]

//unshift 
var myArray = [1, "Hello", [2, 3]];
myArray.unshift(0);
console.log(myArray); // [0, 1, "Hello", [2, 3]]

//slice 
var myArray = [1, "Hello", [2, 3]];
console.log(myArray.slice(1, 2)); // ["Hello"]

//splice 

var myArray = [1, "Hello", [2, 3]];
myArray.splice(1, 1, "Hello World", [4, 5]);


