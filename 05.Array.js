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