/************    Modules in JS **********************/

//Modules is the way to split the code into separate files.
// we using the import and export keywords.

// the 17.index.js file is part of this module creation also
/* <script type = "module" src="./16.ES_concept_five.js"></script>   */
/* <script type = "module" src="./17.Index.js"></script> */



// export var Country = "India";
export const Country = "USA";


// export a function
export function add(a,b){
    return a+b;
}

// export a class method 
export class mobileGoods{
    productType = "Mobile";
    location = "UK";
    getProductDetails(){
        return ["iphone","1,00,000"]
    }
}

// export a class method 
export class garmentsGoods{
    garmentType = "louis philippe";
    location = "Australia";
    getProductDetails(){
        return ["shirts","5000"]
    }
}



