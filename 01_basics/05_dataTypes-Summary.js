// ******************************Summary of Data Types****************************

// On the basis of how the data stores in memory & how we can access it,there are two data types:-
    // 1.Primitive
    // 2.Non-Primitive


    const score = 100
    const scoreValue = 100.5

    const isLoggedIn = false
    const outsideTemp = null
    let userEmail;

    console.log(typeof(outsideTemp));
    console.log(typeof(scoreValue));

    const id = Symbol('123')
    const anotherId = Symbol('123')
    console.log(id == anotherId)

    const bigNumber = 1234543212344567789876554212345n   //automatically becomes bigInt

    console.log(typeof(bigNumber));


    // 1.Primitive(Call by Value)
            //   7 types :String,Number,Boolean,null,undefined,symbol,BigInt

    // 2.Non-Primitive(Call by reference)
            //   Array,Objects,Functions

// javaScript is a dynamically typed language because data type will automatically assigned at the time of compilation or code execution            


const heros = ["Shaktimaan","naagraj","doga"];

let myObj = {
    name:"Sumant",
    age:19,
}

const myFunction = function(){
        console.log("Hello World");
}

console.log(typeof(myFunction));     //function but we used to say it "object function"
console.log(typeof(heros));          //Object
console.log(typeof(myObj));          //Object




// Primitive Data Types

// number => number
// boolean => boolean
// string => string
// null => object
// undefined => undefined
// symbol => symbol
// bigInt = > bigInt

// 2.Non-Primitive Data Types

// Array => Object
// Object => Object
// Function => Function
