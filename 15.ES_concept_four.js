/**************************** introduction to class ************************** */

// class is a specail type of function which maintains its own properties and methods.
// members are : 1.constructor (special method)
//               2. properties 
//               3. methods    (normal methods)

// syntax 
    // class <className> {
    //     constructor(<parameters>) {
    //           <initialization code>
    //           <statements>
    //     }
    // }


// constructor is a speacal method , which triggers automatically when we create an object of the class.

//declating a class
class employee_ctr {   // here not used the () here for class declaration only the class <classname>{}

    constructor() {    
        console.log("constructor is called automatically when we create an object of the class");
    }

}

// how to call the class

new employee_ctr();  

// use "new" keyword to create the instance of the class.
// constructor is called automatically when we create an object of the class


var emp_c = new employee_ctr(); 

// "emp_c" is an object or referance of the class "employee_ctr" 





/****************** how to add Properties to the class ****************** */

class employee_pro{
    
    /*properties*/
    employee_id;
    employee_name;

    /*constructor*/
    constructor() {

        // "this" keyword is used to refer the current object of the class. // IMPORTENT
        console.log("from employee_pro class constructor is calling");
        this.employee_id = 101;
        this.employee_name = "william";
        console.log(`employee name is ${this.employee_name} and his id is ${this.employee_id}`);
    }
}

var emp_p = new employee_pro();  // here we are passing the values to the constructor parameters

// another  -  parameter passing 
class employee_pro_1{
    
    /*properties*/
    employee_id;
    employee_name;

    /*constructor*/
    constructor(id, name) {

        // "this" keyword is used to refer the current object of the class. // IMPORTENT
        console.log("from employee_pro_1 class constructor is calling");
        this.employee_id = id;
        this.employee_name = name;
        console.log(`employee name is ${this.employee_name} and his id is ${this.employee_id}`);
    }
}

var emp_p = new employee_pro_1(101, "william");



