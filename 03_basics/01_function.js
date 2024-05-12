function name(){
     console.log("S");
     console.log("U");
     console.log("M");
     console.log("A");
     console.log("N");
     console.log("T");
}
name()


function addTwoNumber(number1, number2){
    console.log(number1+number2);
}
addTwoNumber(3, 8)

// Handling Object in function

const myObj ={
    name:"Sumant kumar",
    email:"sumant@gmail.com"
}

function handlingObj(anyObj){
    console.log(anyObj.email);
    console.log(anyObj.age);

}
// handlingObj(myObj)
handlingObj({
    age: 21,
    isLoggedIn: false
})


// Handling array in function

let myArray = [100,200,300]
function print(arrayPrinting){
    console.log(arrayPrinting[1]);
}
print(myArray)


 