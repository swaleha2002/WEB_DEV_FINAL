// if-else
let x = 10;
if (x > 5) {
  console.log("x is greater than 5");
} else {
  console.log("x is not greater than 5");
}


// If else ladder
let x = 10;
if (x > 15) {
  console.log("x is greater than 15");
} else if (x > 10) {
  console.log("x is greater than 10 but less than or equal to 15");
} else if (x > 5) {
  console.log("x is greater than 5 but less than or equal to 10");
} else {
  console.log("x is less than or equal to 5");
}

//Switch case

let x = "apple";
switch (x) {
  case "apple":
    console.log("x is an apple");
    break;
  case "banana":
    console.log("x is a banana");
    break;
  case "orange":
    console.log("x is an orange");
    break;
  default:
    console.log("x is something else");
}

//ternary operator
let x = 10;
let y = 20;
let max;

max = (x > y) ? x : y;

console.log(max); // Outputs: 20


// //for loops
for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
  
// //for in loops
let person = {
    name: "John",
    age: 30,
    job: "developer"
  };
  
  for (let key in person) {
    console.log(key + ": " + person[key]);
  }
  
  //for-of loops
  let numbers = [1, 2, 3, 4, 5];

for (let number of numbers) {
  console.log(number);
}

//while loop
let i = 1;

while (i <= 10) {
  console.log(i);
  i++;
}

