
/********************** LocalStorage ***********************/

// it store the information permanentely until delete

localStorage.setItem("USERNAME","Ananthu unni");
localStorage.setItem("PASSWORD","Ananthu@123");


localStorage.removeItem("USERNAME");    //-- remove the item from local trorage
localStorage.setItem("PASSWORD","AnanthuUnni@123");
var pass = localStorage.getItem("PASSWORD");
console.log("Password is ",pass);

localStorage.clear()   //-- to clear the localstorage


/********************** SessionsStorage ***********************/

// the information store temperarly while the tab closed

sessionStorage.setItem("USERNAME","Ananthu_unni_session")
sessionStorage.setItem("PASSWORD","Ananthu@100")
sessionStorage.setItem("AGE","80")
sessionStorage.setItem("CITY","Moon")

sessionStorage.removeItem("PASSWORD") //--remove the item from the session storage
sessionStorage.setItem("PASSWORD","AnanthuUnni@123"); //--password is updated, like this way we can update item
var pass = sessionStorage.getItem("PASSWORD");
console.log("Password is ",pass);

sessionStorage.clear()


/********************** Browser Cookies ***********************/

//contain small amount of information about the user for a period of time we set 

document.cookie = "Username = Ananthuunni ; expires = The, 22 Oct 2026 03:37:00 UTS;" ;
document.cookie = "PASSWORD = Ananthu@100 ; expires = The, 22 Oct 2027 03:38:00 UTS;";
document.cookie = "AGE = 80 ; expires = The, 22 Oct 2026 12:00:00 UTS;" ;
document.cookie = "CITY = Moon ; expires = The, 22 Oct 2026 12:00:00 UTS;";

// cookie expires setting like -
document.cookie = "PASSWORD = Ananthu@100; expires = The, 22 Oct 2026 03:38:00 UTS;";


