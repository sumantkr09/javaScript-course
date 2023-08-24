// ***************************************Comparison********************************************

// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);
// console.log(2==2);

//console.log("2">0);


//console.log(null>0);    //false
//console.log(null==0);   //false
//console.log(null>=0);   //true
                // Equality == and comparison > < >= <= works differently.
                // comparison convert null to a number,treating it as 0.
                // That's why 13 is false,15 is true & 14 is false 

console.log(undefined>0);    //false
console.log(undefined==0);   //false
console.log(undefined>=0);   //false

console.log(2==2);
console.log("2"===2);   //=== operator checks data type as well as operand