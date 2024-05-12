// Scope 

// Inner scope can use the variable of parent scope but not vice versa
// try not to use "var" during variable declaration

var c =3;
if(true)
    {
        let a = 5;
        const b = 6;
        var c = 7;
    }
// console.log(a); error (because we are using the inner scope variable)
// console.log(b); error
// console.log(c);    7  (This is the problem with var,that's why we should not use var)

// console.log(c);   7  (inner function c overwrite the c value,this is also the problem with var)



// Scoping inside nested function

function one(){
    let name = "Sumant"
    console.log(name);
    
    two()

    function two(){
        let website = " YouTube"
        console.log(name+website);
    }

    two()
    // console.log(website)   error 
}
// console.log(name);  error because we are name variable outside this scope
one();


// ****************************Interesting*********************



console.log(three(4))         //This will ec=xecute here also before function definition
function three(num)
{
    return num+1;
}
console.log(three(5));

// Another way to declare function

console.log(addOne)    //If we use this here then,error(because we are using it before initialisation)
const addOne = function(num1)          
{
    return num1+1;
}
console.log(addOne(6));