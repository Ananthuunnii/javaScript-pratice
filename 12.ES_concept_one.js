/***********************  Es-concepts one - JS  *************************/


/**************   var  - we can declare 2 time like this */
var CustomerType = "boss";
var CustomerType = "worker";



/**************   Let  - we can can't declare 2 time like this  it get error*/

let Customerheight = "worker";
// let Customerheight = "worker";   this get error


/**************   Const  - we can can't assign multiple time like this it get error*/

const customerName = "ammu";
      customerName = "achu";
console.log(customerName)




/************************   let and var scope understanding **********/

// "let" keyword we can't use outside block

function scopeCheck(){
    let bignum = "fun"
    if(true){
        let smallnum = "bad"
        console.log("********scoper check :",smallnum)
    }
    console.log("********scoper check outside if:",bignum)
    console.log("********scoper check inside if :",smallnum)
}
scopeCheck()


// "var" keyword  we can use outside block

function scopeCheck(){
    let bignum = "fun"
    if(true){
        let smallnum = "bad"
        console.log("********scoper check :",smallnum)
    }
    console.log("********scoper check outside if:",bignum)
    console.log("********scoper check inside if :",smallnum)
}
scopeCheck()


/*************let with exception handling */

function scopeCheck(){
    let bignum = "fun"
    
    if(true){
        let smallnum = "bad"
        console.log("********scoper check :",smallnum)
    }
    console.log("********scoper check outside if:",bignum)
    try{
        console.log("it started",smallnum)
    }catch(e){
        console.log("caught:", e.name, "-", e.message)
    }
    console.log("end")
}
scopeCheck()

/******************* we can mute(changes) in array in "const keyword" */

const customers = ["john","jack"]
customers[0] = "bella"
customers[1] = "deepu"


/******************* we can mute(changes) in Objects in "const keyword" */

const employee = {
    id:1,
    employName:"john"
};



// object freezing

function getemployeelocation(employName){
    // we can do object frezz by doing - Object.freeze(<object name>)
    // freeze the object and we can't change the value of that object
    Object.freeze(employee)
    if(employName == "john"){
        employee.id = 2
    }
    return employee
}

var detailsdata = getemployeelocation(employee.employName)
console.log(detailsdata)