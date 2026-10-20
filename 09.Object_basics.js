//*******************15. objects-Basics in JS  ******/

// object is key value pairs combination
// value can be anything          : number, string , array, undefined,boolean 
// key can be                     : can represent in string format or without string format
// recommndation for key use string format

// eg:
var customer_1 =    {
    "name" : "akash",
    "age" : 24,
    "gender" : "M",
    "family_details" : {
        "mother" :"marry",
        "father" : "Danny",
        "sister" : "grillish",
        "pets" : 2
        },
    "EMI" : true,
    "vehiche": null, // defined but nothing in that 
    "ownhome":undefined //not defined
}
console.log(customer_1)

/***************** how to create array with list of objects */

// array with object
var workingCustomer = [
    {   
        "name":"jazy",
        "age" : 30
    },
    {
        "name":"jully",
        "age" : 19
    }
]
console.log(workingCustomer)




/* access value from a Object */

//syntax : 
// var data = obj["key"]
//            obj.key

var workingMan = {
    "name":"spider",
    "age":45
}

console.log("this is dot  :",workingMan.name,workingMan.age)
console.log("this is the index :", workingMan["name"],workingMan["age"]) // better is index 





/*** time to remember the property of the length from string */
// example:  
var names = "john";
var nameLength = names.length; // here length is the property


// example:
var customerId = 1
var consumer = {
    1:"petter john"
}
console.log(consumer[customerId]) //this is better way



// example:
var customer_5 ={
    "name":"john"
}

function getCustomerName(){
    return "john smith"
}

var consumer_6 = {
    "name" : getCustomerName()
};

console.log(consumer_6["name"])


var customer_1 =    {
    "name" : "akash",
    "age" : 24,
    "gender" : "M",
    "family_details" : {
        "mother" :"marry",
        "father" : "Danny",
        "sister" : "grillish",
        "pets" : 2
        },
    "EMI" : true,
    "vehiche": null, // defined but nothing in that 
    "ownhome":undefined //not defined
}

customer_1.name = "akash john"
console.log("first: ",customer_1)

customer_1.age = 29
console.log("Seocnt: ",customer_1)

customer_1.family_details.mother = "Marry John"
customer_1.family_details.father = "John Danny"
console.log(customer_1);

console.log("before adding  the new  property  customer_3",customer_1);

customer_1["hobbies"] =  ["video game","Watch movie",];
delete customer_1.vehiche;
console.log(customer_1)