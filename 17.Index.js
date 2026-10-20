import {Country,add,mobileGoods,garmentsGoods} from './16.ES_concept_five.js';

console.log(Country); 
console.log("sum :",add(5,3));


/* Task 1  - get the productdetails from mobilegoods */
var mob_obj = new mobileGoods();
var mob_meth = mob_obj.getProductDetails();
console.log("Mobile Product Details :",mob_meth);



/* Task 2  - get the productdetails from garmentsgoods */
var gar_obj = new garmentsGoods();
var gar_meth = gar_obj.getProductDetails();
console.log("Garments Product Details :",gar_meth);