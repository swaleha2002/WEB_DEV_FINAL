// dom
// document.title = "swaleha";
// console.log(document.title);
// console.log(document.body);
// document.body.style.backgroundColor = "green";

//dom children
// console.log("Hi swaleha");
// document.body.firstElementChild;
// document.body.firstElementChild.children(0);

//selcting elements byb id,class
console.log("harry");

// let boxes = document.getElementsByClassName("box");
// console.log(boxes);

// // bhupendarjogis[2].style.backgroundColor= "red";
// boxes[2].style.backgroundColor= "red";

// document.getElementById("red").style.backgroundColor= "red";

//queryselector selects first box
// document.querySelector(".box").style.backgroundColor = "green";

//queryselectorall selects all boxes
//to access all box u should use for loop and we use for each hear
document.querySelectorAll(".box").forEach(e=>{e.style.backgroundColor = "green";
});
// we can also we traditional for loop in above query selector
