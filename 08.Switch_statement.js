//************* switch case statement  *************/

// syntax
// switch(<value to be check>){
    //     case <value>:{
    //          statement;
    //          ----------
    //          ----------
    //          break; }
    //     case <value>:{
    //          statement;
    //          ----------
    //          ----------
    //          break; }
    //     Default : {
    //          statement
    //          ----------
    //          ----------} 
    // }
           
    
// eg:
var role = "Trainee";
switch(role){
    case "Trainee":
        console.log("he is a Fresher developer");
        break;
    case "ASD":
        console.log("he is a Assiciate software developer");
        break;
    case "SSD":
        console.log("he is a Senior software developer");
    default:
        console.log("he is no a Staff of developing team")
}


//*************** switch case in function *****************/

//declaration
function getUserRole(role){
    switch(role){
        case "admin":
            console.log("he is the admin he can modify anything in the app")
            break;
        case "salerep":
            console.log("he is salerep he can modify few pages")
            break;
        case "enduser":
            console.log("he is a enduser. he can just view few pages")
            break;
        default:
            console.log("record is not exist please check with another user")
    }
}
detailsOfGetUser = getUserRole("admin")
console.log(detailsOfGetUser)


