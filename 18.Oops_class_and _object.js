// Class

//blue print
class employee{

    //properteis
    name = "no name";
    age = 0;

    //constructure
    constructor(){
        console.log("Constructor is called");
    }

    //method
    display(){
        console.log(`Name: ${this.name} Age: ${this.age}`);
    }
}

//constructor, properties and methods




//Object
const emp1 = new employee();
// emp1.name = "John";
// emp1.age = 30;
emp1.display();     //using 1st object function call


const emp2 = new employee();
emp2.name = "Jane";
emp2.age = 25;
emp2.display();     //using 2th object function call

const emp3 = new employee();
emp3.name = "Bob";
emp3.age = 35;
emp3.display();     //using 3rd object function call





