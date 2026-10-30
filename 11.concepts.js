/******************* Few concepts *****************/

//convert the string to number

var customerIdString_1 =  "1";
var customerIdNumber_1 = parseInt(customerIdString_1)
console.log(type(customerIdNumber))
console.log(customerIdString)

var customerIdString_2 = "c1";
var customerIdNumber_2 = parseInt(customerIdString_2)
console.log("output :",customerIdNumber_2)

// NaN - means not a number which indicates that wheather given output in number fromat
//NaN - not a number

if(isNaN(customerIdNumber_2)){
    console.log("it is not a number")
}else{
    console.log("it is a number")
}




/************* ternary operater ******************/  //(importent)

// using ternary operater  we can get  the same output 
// Use ternary operater  where  you are  having the single  statement in "IF" and "Else" statement 
// var numberCheck = 100 == 100 ? "price is 100" : "price is not 100"; 
// console.log("number Check :",numberCheck)

var number_1 = 0;
var numberCheck = number_1 >0 ? "Positive number" : number_1 < 0 ? "Negative number" : "Zero"
console.log(numberCheck)




/***********************  Check the data type Strictly ****************/

" === "
var check_1 = "1"
var details_1 = check_1 === 1 ? "same datatype" : "Not same data type"
console.log(details_1)