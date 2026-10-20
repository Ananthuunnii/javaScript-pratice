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


//constructor is a speacal method(void), which triggers automatically when we create an object of the class.

//declating a class
class employee_ctr {   // here not used the () here for class declaration only the class <classname>{}

    constructor() {     // Optional
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
    constructor() {                 //constructor is Optional

        // "this" keyword is used to refer the current object of the class. // IMPORTENT
        console.log("from employee_pro class constructor is calling");
        this.employee_id = 101;
        this.employee_name = "william";
        console.log(`employee name is ${this.employee_name} and his id is ${this.employee_id}`);
    }
}

var emp_p = new employee_pro();  // here we are passing the values to the constructor parameters




// Another  -  parameter passing in constructor  and Normal Method calling in the class
class employee_mtd{
    
    /*properties*/
    employee_id;
    employee_name;

    /*constructor*/
    constructor(id, name) {                 //constructor is Optional

        // "this" keyword is used to refer the current object of the class. // IMPORTENT
        console.log("from employee_pro_1 class constructor is calling");
        this.employee_id = id;
        this.employee_name = name;
        console.log(`employee name is ${this.employee_name} and his id is ${this.employee_id}`);
    }
    /*methods*/
    getEmployees(){
        console.log("from getEmployees method");
        console.log(`employee name is ${this.employee_name} and his id is ${this.employee_id}`);
    }
}

var emp_m = new employee_mtd(101, "william");
emp_m.getEmployees();  // calling the method of the class using the object of the class


//another example of class with constructor and method
var emp_database = [{
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

class employee_mtd_para{
    
    /*properties*/
    employee_id;
    employee_name;

    /*constructor*/
    constructor(id, name) {               
        console.log("from employee_pro_1 class constructor is calling");
        this.employee_id = id;
        this.employee_name = name;
        console.log(`employee name is ${this.employee_name} and his id is ${this.employee_id}`);
    }
    /*methods*/
    getEmployees(){
        console.log("from getEmployees method");
        console.log(`employee name is ${this.employee_name} and his id is ${this.employee_id}`);
    }
    getEmployeeLocation(location){
        console.log("from getEmployeeLocation method");
        var customerRecord = emp_database.filter((employee)=> { return employee.location === location; });
        // console.log(customerRecord);
        return customerRecord;

    }
}

var emp_mp = new employee_mtd_para(101, "william");
emp_mp.getEmployees();
var mumbaiEmployees = emp_mp.getEmployeeLocation("Mumbai");
console.log("mumbaiEmployee :", mumbaiEmployees);



/************** (inheritance) communicate one class  to another class************/

/***by using -  "Extends" keyword */


class emp_class_1{
    constructor(id, name) {               
        console.log(`Employee class_1: employee name is ${name} and his id is ${id}`);
    }
}

class emp_class_2 extends emp_class_1{
    constructor() {   
        super(1010101, "John william");                     // super() is used to call the constructor of the parent class            
        console.log(`Employee class_2    :`);
    }
}     

var emp_c2_obj = new emp_class_2();



















