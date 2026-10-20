/* ***********12. Conditional statements  JS ***********/

//boolean is a datatype which  returns the true or false 

var isAdminRole = true; // i enquire weather he is having  the admin  role or not
var isSalesRepoRole = true; // i enquire weather he is having  the salerepo role or not

/*********** syntax of if else conditional statement********/

// if (<condition>){
//     statement
// }else{
//     statement
// }

eg:
if (isAdminRole){
    console.log("he is a Admin")
}else{
    console.log("he is not a Admin")
}

//************** syntax of we use  else if statement  between  the if and else condition */

// syntax 
// if (<condition>){
//     statement
// }else if(<condition>){
//     statement
// }else{
//     statement
// }

if (isAdminRole){
    console.log("he is admin")
}else if (isSalesRepoRole){
    console.log("he is sales repo")
}else{
    console.log("he is not admin either sales repo")
}


/***********check the value is correct or not in conditional statement******************/

// Use ==(double equal) operator

var customerRoleId = 2
var customerRoleName = "cook"
if (customerRoleId = 2){
    console.log("customer role id is 2")
}else{
    console.log("customer role id is not 2")
}

/*********** using the and(&&) , or(||) in the conditional statement  */

if (customerRoleId == 2 && customerRoleName == "cook"){
    console.log("both Details are correct")
}else if (customerRoleId == 2 || customerRoleName == "cook"){
    console.log("one of the Details are correct")
}


var customerPrice = 1000
if (customerPrice >= 1000){
    console.log("the Price is equal or graterthan 1000")
}
if (customerPrice <= 1000){
    console.log("the Price is equal or lessthan 1000")
}
if (customerPrice == 1000){
    console.log("the Price is equal to 1000")
}


//********* use of if else in function. real world example */
function getLocationFullNameDetails(location){
    var locationName = "";
    if (location = "AUS"){
        locationName = "Austraila"
    }else{
        locationName = "location is not available"
    }
    return locationName
}

// // calling function 
var locationDetails = getLocationFullNameDetails("AUS")
console.log(locationDetails)



//********* operaters  <,<= , >= , >, !=, == , =!   ***************/