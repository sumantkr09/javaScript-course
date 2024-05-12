// this and arrow function
// this is used in terms of inner context

let user = {
    username: "Sumant kumar",
    email:"sumant@gmail.com",
    isLoggedIn: false,
    welcomeMessage: function(){
        // console.log(`${user.username} , Welcome to website`)
        console.log(`${this.username} , Welcome to website`)
        console.log(this)
    }
}

// user.welcomeMessage();

function name()
{
    // console.log(this)
    let username = "Sumant"
    console.log(this.username)
}
// name()

// const one = function(num1){
//     return num1+1
// }
// console.log(one(5))

// Above one function can be written as:


// const one = (num1) =>{
//     return num1+1
// }
// console.log(one(3))

// Above one function can also written like this:

// const one =(num1) => num1 + 1;
// console.log(one(5))

// const one =(num1) => (num1 + 1);
// console.log(one(5))

const one =(num1) => ({username:"Sumant"});
console.log(one(5))




