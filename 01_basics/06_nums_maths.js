let num = 200;
// console.log(num);

let balance = new Number(200);
// console.log(balance);
// console.log(balance.toString());
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

let number = 234.67
// console.log(number.toPrecision(4));

let number1 = 100000000
// console.log(number1.toLocaleString('en-IN'))


// **************************************************Maths*********************************************

// console.log(Math);

// console.log(Math.abs(-4));
// console.log(Math.round(4.7));
// console.log(Math.ceil(4.3));
// console.log(Math.floor(4.2));
// console.log(Math.sqrt(25));
// console.log(Math.max(4,3,6,7,8,10));
// console.log(Math.min(6,7,3,2,8,9,1,10,14));

console.log(Math.random())    //Its values lies between 0 & 1
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max-min+1) + min));