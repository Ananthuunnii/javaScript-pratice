//******************* Loops in JS  ***************/


/************* while loop *************/
len = 10;
index = 0;
customerId = [];

// while(<condition>){
//     <statement 1 >
//     <statement 2>
//     }

while(index<len){
    customerId.push(index)
    index +=1
}
console.log(customerId)




/****************  For loop *************/

// for (<inisialation value>,<applay condition>,<target initlization value>){
//     <statement>
// }

for (index = 0;index<len;index++){
    customerId.push(index)
    console.log(customerId)
}



/**************** loop with function ******************/
function getCustomerRecordByName(customerName) {
    var customer = null; // No value is available.

    for (var index = 0; index < customersList.length; index++) {
        // console.log("********** start - looping number ********", index);
        // console.log("current value in the loop", customersList[index]);

        if (customersList[index].name == customerName) {  // checking the name with the customerName
            customer = customersList[index];
        }
        // console.log("********** end - looping number ********", index);
    }
    return customer;
}

var customerRecord = getCustomerRecordByName("Clerk");
console.log(customerRecord);