// //for
// // var myArray = [1, 2, 3, 4, 5];
// // for (var i = 0; i < myArray.length; i++) {
// //     console.log(myArray[i]);
// // }

// //forEach
// var myArray = [1, 2, 3, 4, 5];
// myArray.forEach(function(element) {
//     console.log(element);
// });

// //for of
// var myArray = [1, 2, 3, 4, 5];
// for (var element of myArray) {
//     console.log(element);
// }

//Map, Filter and Reduce

//map
var myArray = [1, 2, 3, 4, 5];
var multipliedArray = myArray.map(function(element) {
    return element * 2;
});
console.log(multipliedArray); // [2, 4, 6, 8, 10]


//filter
var myArray = [1, 2, 3, 4, 5];
var evenNumbers = myArray.filter(function(element) {
    return element % 2 === 0;
});
console.log(evenNumbers); // [2, 4]

//reduce
var myArray = [1, 2, 3, 4, 5];
var sum = myArray.reduce(function(acc, cur) {
    return acc + cur;
}, 0);
console.log(sum); // 15 acc-accumulator cur- current

