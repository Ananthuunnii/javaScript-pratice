/* ***********7. Array in  JS ***********/

var names = ["ammu", "achu","appu","anu","alex"]
var highjumplength = [1.500,1.200,1.400,1.800,0.800,0.600,0.900]
var salary = [1500,1200,1400,1800,800,600,900]
var wallet = ["bisketcard",500,0.460,3.45,["ammu","achu","cr100"]]

console.log(names)
console.log(salary)
console.log(highjumplength)
console.log(wallet)

// how to check the array inside a array
console.log(wallet[4][0])



// Array push
names.push("jimboomba");
salary.push(55555);
highjumplength.push(20.2030)
wallet.push(["orio",501,8.5,"fungame"])

// checking the push status 
console.log(names)
console.log(salary)
console.log(highjumplength);
console.log(wallet);



// Array pop
names.pop();
console.log(names)


// realworld example of array

customerdetails = [
    ["appu",29,"M"],
    ["ammu",26,"F"]
]
console.log(customerdetails)

function customerview(){
    let customerdetails = 
    [
        ["appu",29,"M"],
        ["ammu",26,"F"]
    ]
    console.log(customerdetails)
    customerdetails.push(["jack",34,"M"])
    // console.log(customerdetails)
    return customerdetails
}
outputview = customerview()
console.log(outputview)




/*****   returntype and non return type difference   ***** */

customerdetails = [
    ["appu",29,"M"],
    ["ammu",26,"F"]
]

// no return type function with array push
function customerview(first,secont){
    customerdetails.push([first,secont])
    console.log(first,secont)
}
customerview(10,20)



// return type function with array push
function customerview(first,secont){
    customerdetails.push(first)
    return customerdetails
}
result = customerview(["jagu",25,"M"])
console.log(result)


// array with loops for and while and conditional statements

//for
for(i = 0;i<highjumplength.length;i++){
    console.log(highjumplength[i])
    if (highjumplength[i] == 1.800){
        console.log("the recorde present in the code")
    }else{
        console.log("record is not present")
    }
}

//while
var i = 0
var len = salary.length
var draft = []
while(i<len){
    console.log(`person ${i} salary is ${salary[i]}`)
    if (salary[i]> 1000){
        draft.push(salary[i])
    }
    i++
}
console.log("persons salary grater then 1000 :",draft)




const products = ["Keyboard", "Mouse", "Monitor"];
console.log("products list before adding : ",products)

/***************this way we can remove the value from middle of the array****************/
// this way we can add value in the middle of the array
// products.splice(startPossitionOfmakeChange,howManyPossitionNeedToDelete,"adding value")
products.splice(1, 1, "Headphones");
console.log("products list after adding a item : ",products)
console.log("the latest products list :",products.join(", "));

/***************this way we can remove the value from middle of the array****************/
// Keyboard, Headphones, Monitor
// const removedProducts = products.splice(0, 1);
// console.log(removedProducts[0]); // Keyboard