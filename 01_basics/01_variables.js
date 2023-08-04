const roll = 21316
let name = "Sumant"   
var email = "sumant@gmail.com"
city="Patna"
let grade;     //If undeclared.Then,it is taken as "undefined"

// roll = 21318    This is not possible because of "const"

/*
Prefer not to use "var"
because of issue in block scope and functional scope 
*/

name="Ayush"
email="Ayush@gmail.com"
city="Delhi"

console.log(roll);
console.table([roll,name,email,city,grade]);


