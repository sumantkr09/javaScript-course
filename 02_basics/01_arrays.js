// arrays

// jS Arrays are resizeable and contain a mix of different data type
// jS Array copy-operation creates shallow copies
// Shallow copies:-A shallow copy of an object is a copy whose properties share the same reference.
// Deep copies:- are one whose properties do not share the same reference.

const myArray = [1, 2, 3, 4, 5]
const myHeroes = ["Shaktimaan", "Aaryaman", "Iron-Man"]
console.log(myArray[0]);

const myArray2 = new Array(1, 2, 3, 4, 5)   //Array can be declared like this also

// Array methods

// myArray.push(6)
// myArray.push(7)
// myArray.pop()

// myArray.unshift(8)   //Unshift will add element at the starting position but it is not optimized
// myArray.shift()      //It will remove the starting element
// myArray.shift()

// console.log(myArray.includes(9));   //false
// console.log(myArray.includes(5));      //true
// console.log(myArray.indexOf(9));              //-1
// console.log(myArray.indexOf(18));             //-1
// console.log(myArray.indexOf(3));       
// console.log(myArray);

const newArray = myArray.join()
console.log(myArray);
console.log(newArray);
console.log(typeof(newArray));       //String



// Slice   Splice


console.log("A",myArray);
const myn1 = myArray.slice(1,3);
console.log(myn1)
console.log("B",myArray);
const myn2 = myArray.splice(1,3);             //Splice manipulates the original array
console.log("C",myArray);
console.log(myn2)


