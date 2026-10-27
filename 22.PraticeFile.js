

// variable declaration check

var $value_1;
var __value_2;
var value_3;

// var 123_value_3; // this get error








// array

const products = ["Keyboard", "Mouse", "Monitor"];
console.log("products list before adding : ",products)

/***************this way we can remove the value from middle of the array****************/
// this way we can add value in the middle of the array
// products.splice(startPossitionOfmakeChange,howManyPossitionNeedToDelete,"adding value")
products.splice(1, 1, "Headphones");
console.log("products list after adding a item : ",products)
console.log("the latest products list :",products.join(", "));

/***************this way we can remove the value from middle of the array****************/
// Keyboard, Headphones, Monitor
// const removedProducts = products.splice(0, 1);
// console.log(removedProducts[0]); // Keyboard





















