// Singleton
// Object.create

// Object literals


const mySymbol = Symbol("key1");        //Important for Interview

const user = {
    name: "Sumant",
    "full name": "Sumant kumar",
    [mySymbol]: "myKey1",
    age: 19,
    email: "sumant@912gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(user.name);
console.log(user["name"]);
console.log(user["full name"]);
console.log(user[mySymbol]);

user.email = "sumant@912";
console.log(user["email"]);

// Object.freeze(user);             //This will freeze the user object,we can't update them

user.name = "Ayush";
console.log(user["name"]);
// console.log(user["email"]);
// console.log(user);


user.greetings = function(){
    console.log("Hello user");
}

user.greetingsTwo = function(){
    console.log(`Hello user, ${this.name}`);
}

// console.log(user.greetings);        //[Function (anonymous)]
console.log(user.greetings());         // Hello user              undefined

console.log(user.greetingsTwo());      //Hello user,Ayush         undefined
