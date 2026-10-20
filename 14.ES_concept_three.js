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

// insted
// using spread operater

customerInfor_details_1 = [...customerInfo,...customerInfo_1]
console.log(customerInfor_details_1)
































