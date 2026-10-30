

// variable declaration check

var $value_1;
var __value_2;
var value_3;

// var 123_value_3; // this get error








// array

const products = ["Keyboard", "Mouse", "Monitor"];
// console.log("products list before adding : ",products)

/***************this way we can remove the value from middle of the array****************/
// this way we can add value in the middle of the array
// products.splice(startPossitionOfmakeChange,howManyPossitionNeedToDelete,"adding value")
products.splice(1, 1, "Headphones");

/*
console.log("products list after adding a item : ",products)
console.log("the latest products list :",products.join(", "));
*/
/***************this way we can remove the value from middle of the array****************/
// Keyboard, Headphones, Monitor
// const removedProducts = products.splice(0, 1);
// console.log(removedProducts[0]); // Keyboard

// annonimous function with callback
function sum(a){
    console.log("printing the data from sum function")
    a()

}
// sum(function(){
//     console.log("hello sum")
// })

let sumdata = ()=>{
    return 100
}
// console.log("sum",sumdata())
let add = ()=>{
    console.log("am a arrow function")
}
// console.log("add",add())


// console.log("the data apperat before 4 sec")
// setTimeout(()=>{
//     console.log("the data apperat after 4 sec")
// },4000)

// console.log("the data apperat before 4 sec")
// setTimeout(
//     console.log("the data apperat after 4 sec")
// ,4000)



//01
// string concat
let fname = "star";
let lname = "link";

let fullname = fname.concat(" ",lname)
// console.log(fullname) // star link
// console.log(fname)

//02
// upper and lower case in strings
let upname = fname.toUpperCase()
let lowname = fname.toLowerCase()
// console.log(upname) // STAR
// console.log(lowname) //star

//03
// finding the lenth of a string
// lenth always start count from 1

let namelength = fullname.length
// console.log(namelength) // 9, because 8 letters and 1 space = 9

//04
//fetching the letter from string

let perticularletter = fname.charAt(0)  // select letter start with 0
// console.log(perticularletter)
for(let i of fname){
    // console.log(i)
    let point = fullname.charAt(3)

    if (i == point){
        // console.log("if answer:",i)
    }
}
// or we can tech letter like 
let checkletter = fullname[0]   // by this way it start from 0
// console.log(checkletter)


//05
// console.log(a());            // declared
// console.log(typeof b);       // undefined
// try { b(); } catch (e) { console.log(e.constructor.name); } // exicute the try

function a() { return "declared"; }
var b = function () { return "expression"; };


//06
let box = [1,"234","sana",70000]

// console.log(box);

// array - [] ,  start index 0 , ordered collection of value
// object - {} , named key , keyvalue pare , access using key

// example 
let bucket = ["pen","paper",1,"$1000"]
bucket.push("rat")
bucket.pop()
bucket.shift()
bucket.unshift("BIGBASKET")
bucket.splice(1,2,"Vipin Ram")

let persondata = {
    name:"Ayush",
    age :"19",
    location:"bangalore"
}
persondata.job = "Software engineer"
persondata.name = "varun"
delete persondata.age
// console.log(bucket[0])
// console.log(persondata.location)
// console.log( persondata)
// console.log( bucket)

// premetive data type - data type hold a single base value.it's immutable. number, string,boolean,null,default,symbol
// cannot be changed one's it created


//non-primitive datatype - data type hold multiple or more complex value. it's mutable
// Array,object, function 

//07
//scope check
function x(){
    var pmoney2 = 20;
    let pmoney1 = 10;
}
// console.log(pmoney2)


//08
// anonymoues function
let wedding = function(s){return s*100}
// console.log(wedding(24))

price = [1,2,3,4,5]
let icecream = price.map(function(x){return x*10})
// console.log(icecream)


// anonymoues function mostly use with callback methods
function sayhello(callback){
    callback();
}
// sayhello(function(){console.log("printing from the sayhello's argument")})




//09
//arrow function
let personName = ()=>{
    // console.log("my name is monster") 
    // return "the return of arrow function"
    }
// console.log(personName())

//10
//normal function
function customerdata_1(){
    var customerwork = "IT analyst"
}
let resultdata_1 = customerdata_1()
// console.log(resultdata_1)
//loop for


// multiplication table
let Tnum = 5;
for(let i=1;i<=10;i++){
    // console.log(`${i}*${Tnum}=${i*Tnum}`)
}

//11

//"=="  -- //is used for cheak the value same not check the datatype
//"===" -- // check the datatype and value

if (1 == true && 0=== false){
    // console.log("Success 1")
}
if (1 == true || 0=== false){
    // console.log("Success 2")
}


//12
//switch statement
role = "Admin"
switch(role){
    case "User":
        console.log("hello it's User");
        break;
    case "Admin":
        // console.log("hello it's Admin");
        break;
    case "Guest":
        console.log("hello it's Guest")
        break;
    default:
        console.log("no user exist")
}

//13
//object creation
let cusromerDetails = {
    name:"Amal dev",
    age :19,
    location:"bangalore",
    gender:"M",
    familyDetails:{
        mother:"anna",
        father:"danny",
        sister:"anne"
    },
    EMI:true
}

// object inside array
let bucketarr = [{name:"annu",place:"kkd"},{name:"aswin",place:"pkd"}]
// console.log(bucketarr)
console.log(bucketarr[0]["name"])


// convert string to number

let con = "Geeva"

console.log(parseInt(con[0]))



// isNan is used for to checak the given is a number or not
//NaN - not a number
let numbercheck = 1;
if (isNaN(numbercheck)){
    console.log("it is not  number")
}else{
    console.log("it is a number")
}


// ternary operater
let valueCheck = 2;

let myvalue = valueCheck >0 ? "posative nnumber" : valueCheck< 0 ? "negative number" : "zero";
console.log(myvalue)










