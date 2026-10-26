/*************6. JS functions basics*************/
// function are two types
    // 1. return type function
    // 2. non return type functions


/*declaration*/             // return type function
function printword(){
    var name = "ananthu"
    return name;
}

//calling function
var displayword = printword()
console.log("****first method****",displayword)



/*declaration*/             // no return Type function
function printword2(){
    var name = "ananthu"
    console.log(name)
}

// calling function
var displayword = printword2()
console.log("****Secont method****",displayword)

// /* *********** undefine is a datatype in JS ****/
var myName;
console.log("value of myName  would be like : ",myName)  //because it's not defined
