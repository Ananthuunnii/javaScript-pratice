/****************** ES - concepts  *****************/

//default parameters - set default the parameters value.
function getCustomerData(names,Locations = "Mumbai",age = 48){
    console.log(names," ", Locations ," "+age)
}

getCustomerData("Willem");
getCustomerData("Willem","London");
getCustomerData("Willem","London",50);



//reset parameters -  (...args) - we can pass the multiple parameters in the function
function getCustomerData(names,Locations, ...args){
    console.log(names," ", Locations ," ",args)
}

getCustomerData("Willem","London","28","M","IT Developer");



//spread operater - one array quickly copy to another array without sepearation
var customerInfo = ["william",23,"Marry",45,"jacky",64,"john",25,"Gargi"];
var customerInfo_1 = ["Gorgena", 49,"jenner",19]

//Normaly we write
customerInfor_details = [customerInfo,"Gorgena", 49,"jenner",19] //this inticates array inside another array
console.log(customerInfor_details)  
// output: [["william",23,"Marry",45,"jacky",64,"john",25,"Gargi"], 'Gorgena', 49, 'jenner', 19]



// insted
// using "Spread operater"

customerInfor_details_1 = [...customerInfo,...customerInfo_1]
console.log(customerInfor_details_1)
// output: ["william", 23, "Marry", 45, "jacky", 64, "john", 25, "Gargi", "Gorgena", 49, "jenner", 19]




/*******************************De- Structuring******************************/
// breakdown the complex structure into simple structure.

var allFoodItems = ["egg","chicken","grapes"];

//Normaly we write
var sname_1 = allFoodItems[0];
var sname_2 = allFoodItems[1];
var sname_3 = allFoodItems[2];

var [veg,nonveg,fruits] = allFoodItems;
console.log(veg,nonveg,fruits);
// output: "egg" "chicken" "grapes"                     --- not in array format

//Insted we do

// With destructuring
var [... allFoodItems_1] = ["egg","chicken","grapes"];

console.log("output of the array :",allFoodItems_1);

// output of the array : ["egg", "chicken", "grapes"]     -- in array format



var [veg,nonveg, ...allFoodItems_2] = ["egg","chicken","grapes","apple"];

console.log("output of the array :",veg,",",nonveg);
console.log("output of the array :",allFoodItems_2);


/******************************* Template Leterals  ********************************** */

var customer_w = {
    "location":"Mumbai",
    "age": 48,
    "name":"Willem"
};

//Notmaly we write
var customerDetails = "customer name is "+customer_w.name+" and he is from "+customer_w.location+" and his age is "+customer_w.age;
console.log(customerDetails);   

// Template Leterals - we can use the variable inside the string using ${variable_name}
var customer_lDetails = `customer name is ${customer_w.name} and he is from ${customer_w.location} and his age is ${customer_w.age}`;  
console.log(customer_lDetails);

















