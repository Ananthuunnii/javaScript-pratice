/******************** Encapsulation **********************/

class BankAccount{

    // balance = 0;  // public
    #balance = 0; //private   -- // this private property can't modify outside of the class

}

const account = new BankAccount();
// account.balance = 1000 // modify the public property
// account.#balance = 1000; // can't modify the private property outide class

// console.log("initial balance :",account.balance); //accessing the public property



// example :


class xBankAccount{

    
    #balance = 0; //private
    constructor(balance=0){
        this.#balance = balance
    }
    deposite(amount){
        this.#balance += amount;
    }
    withdraw(amount){
        this.#balance -=amount;
    }
    getBalance(){
        return this.#balance
    }

}

const An_account = new xBankAccount(1);
console.log("initial balance :",An_account.getBalance());
An_account.deposite(1200)
console.log("after deposite balance :",An_account.getBalance());
An_account.withdraw(200)
console.log("after withdraw balance :",An_account.getBalance());
An_account.deposite(3000)
console.log("after deposite balance :",An_account.getBalance());



const manu_account = new xBankAccount();
console.log("initial balance :",manu_account.getBalance());
manu_account.deposite(5700)
console.log("after deposite balance :",manu_account.getBalance());
manu_account.withdraw(2800)
console.log("after withdraw balance :",manu_account.getBalance());
manu_account.deposite(1100)
console.log("after deposite balance :",manu_account.getBalance());



/********************** Inheritance ***************************/


class vehicle{

    brand;
    constructor(cbrand){

        this.brand = cbrand;
    }
    start(){
        console.log(`Here : ${this.brand}+ started`)
    }
}

class Car extends vehicle{              /// use "extends" for inheriting the parent class

    model;
    constructor(cbrand,cmodel){
        super(cbrand)                       // this is the way to access the parent class properties
        this.model = cmodel;
    }

    displayDetails(){
        console.log(`the model of car is ${this.model} and the brand is ${this.brand}`)
    }
}

const myCar = new Car("Toyota","Corolla");
myCar.displayDetails();
const friendCar = new Car("BMW","x5");
friendCar.displayDetails();





/********************** Polymorphosm ***************************/

//same method behave differentely based on the situation


class Animal{
    makesound(){
        console.log("animal makes  sound")
    }
}

class Dog extends Animal{
    // makesound(){
    //     console.log("dog makes sound ");
    //     }
}

class Cat extends Animal{
    makesound(){
        console.log("cat make sound")
    }
} 
dog = new Dog();
dog.makesound();    // can see the difference Dog class "makesound" method output and Cat's below
cat = new Cat();
cat.makesound();    // can see the difference 

// actually the polimorphism work like
// dog.makesound();  => check the child class first if there no method in the child class =>
// => then it will perform based on the parent class method 




/********************** abstraction ***************************/

//


class payment{
    pay(){
        console.log("payment is done")
    }
}

class credit extends payment{
    pay(){
        console.log("payment through Creat card")
    }
}

class UPI extends payment{
    pay(){
        console.log("payment through UPI")
    }
}

class Debit extends payment{
    pay(){
        console.log("payment through Debit card")
    }
}
 
// ---------------------Note --------------------------
// -example-
// this all classes i have i build a payment system and am selling my servise to someone required
// so i give only "new UPI()"
const customerpay = new UPI()
customerpay.pay()
// so they use "const customerpay = new UPI()"

// that is abstraction  hiding my implemendation details and showing only required things


