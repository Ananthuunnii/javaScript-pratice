/* ***********10. Function Scope in  JS ***********/


var customername = "ram"
function encription(){
    var customerpassword = "Ram@123"
    console.log("customername outside the function",customername); // global scope          -- no error
    console.log("customerpassword is inside the function",customerpassword) //local scope   -- no error (it inside the function. in scope)
}
encription()
console.log("customername outside the function",customername); // global scope          -- no error
console.log("customerpassword is inside the function",customerpassword) //local scope   -- error ( it's outside local scope)




/* ***********11. function return type in not return  JS ***********/

// with return type
function customerdata(){
    var customerwork = "IT Developer"
    return customerwork
}
resultdata = customerdata()
console.log(resultdata)



// with no return type function or we can call a void function
function customerdata_1(){
    var customerwork = "IT analyst"
}
resultdata_1 = customerdata_1()
console.log(resultdata_1)




/* undefined is also data type which don't contains the nothing 
it doesnot contain the any  defined value */

// shift method(array method) - to remove the first element(0th element) from an array.
// simple example of return type function with array push and the Shift method
function GetCustomerId(list,listitem){
    list.push(listitem)
    list.shift()
    return list
}

// unshift method(array method) - to add the array data in an array first position.
var customerId = [1,2,3,4]
customerId.unshift(5)
console.log(" after the unshift array:",customerId)


var customerId = [1,2,3,4]

console.log("array format",customerId) // this is the array format

console.log("before the function call :",JSON.stringify(customerId)); // this is string format
GetCustomerId(customerId,5)

