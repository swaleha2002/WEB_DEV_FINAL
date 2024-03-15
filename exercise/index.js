//exercise 1
//faulty calculator

/* This faulty calculator does following :
1.It takes two numbers as input from the user
2.It performs wrong operations as follows
+ ---> -
*--->+
- --->/

it performs wrong operation 10% of the time

*/

let random = Math.random();
let a = prompt("enter first number");
let c = prompt("enter operation");
let b = prompt("enter second number");


let obj ={
    "+" :"-",
    "*" :"+",
    "-" :"/",
    "/" :"**",
}

//first method to solve by if else
// if(random>0.1){
//     //performs correct calculation

// }
// else{
//     //perform wrong calculations
//     c=obj(c);
// }

//second method is eval
if(random>0.1){
    //performs correct calculation
    console.log(`The result is ${a} ${c} ${b}`)
    alert(`The result is ${eval (`${a} ${c} ${b}`)}`)

}
else{
    //perform wrong calculations
    c=obj(c);
    alert(`The result is ${eval (`${a} ${c} ${b}`)}`)
}
