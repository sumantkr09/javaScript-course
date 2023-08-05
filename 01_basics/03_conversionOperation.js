//    Case-1

// let score = "33"

// console.log(typeof score);
// console.log(typeof(score));

// let valueInNumber = Number(score);        
// console.log(typeof valueInNumber);       //number
// console.log(valueInNumber);              //33

//  Case-2 

// let score = "33abc"

// console.log(typeof score);
// console.log(typeof(score));

// let valueInNumber = Number(score);      
// console.log(typeof valueInNumber);     //output ->number
// console.log(valueInNumber);            //NaN

// Case-3

// let score =null
// console.log(typeof(score));    //Output will be "Object"
// let valueInNumber = Number(score)    
// console.log(typeof(valueInNumber));    //Output will be "number"
// console.log(valueInNumber);        //Output will be 0 here


// Case-4

// let score =undefined
// console.log(typeof(score));    //Output will be "undefined"
// let valueInNumber = Number(score)    
// console.log(typeof(valueInNumber));    //Output will be "number"
// console.log(valueInNumber);    //Output will be  NaN


// If score will be "true" and we will convert it in number.Then,the value of this console.log(valueInNumber);  will be "1"

// If score will be "Sumant" and we will convert it in number.Then,the value of this console.log(valueInNumber);  will be "NaN"

// Summary

// "33" => 33
// "33abc" => NaN
// "true" => 1
// "false" => 0


let isLoggedIn = 1
let booleanIsLoggedIn =Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);             //Output will be "true"

// For Boolean conversion

// 1 => true
// 0 => false
// "" => false
// "Sumant" => true


let number = 33
let numberString = String(number)
console.log(numberString);
console.log(typeof(numberString));

