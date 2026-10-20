/******************* ARROW function ********************/


// () => {
//         statement
//       }

//  notmal function
function getName(){
    return "Petter JR"
}
var customername =getName()



//   arrow function
var arrowGetName = ()=>{
    return "amazone One"
}
console.log("arrowGetName : ",arrowGetName())



//  passing the parameter
var arrowGetName = (companyname)=>{
    return "this is the new company"+companyname
}
console.log("arrowGetName : ",arrowGetName("amazone go"))



//  passing the multiple parameter passing
var arrowGetName = (companyname,salary)=>{
    return "this is the new company"+companyname + " and CTE is " + salary
}
console.log("arrowGetName : ",arrowGetName("amazone go",280000))



// same output with simple method
var arrowGetName_1 = (companyname,salary)=> "this is the new company"+companyname + " and CTE is " + salary
console.log("arrowGetName : ",arrowGetName_1("amazone go",280000))




/******************* Arrow function in real Time Scenarios ****************/

var customer = [{
    "name":"abhi",
    "price":"2000.09",
    "location": "Mumbai"
    },
    {
    "name":"ammu",
    "price":"100.58",
    "location": "Kochi"
    },
    {
    "name":"yash",
    "price":"200.76",
    "location": "Chennai"
    },
    {
    "name":"bella",
    "price":"500.29",
    "location": "Pune"
    }
]
/*******how to get the customers who is having the name = ammu (am doing the filter) */

/***here the filter is expecting the method signture */
/***<arrayvalue>.filter(function(Value,index,array){} */


// without arrow function
var customersByName = customer.filter(function(customer){
    if (customer.name == "yash"){
        return customer
    }
})
console.log(customersByName)

// with arrow function
var customersByName =  customer.filter((customer) => {
    if (customer.name == "yash"){
        return customer
    }
})
console.log(customersByName)