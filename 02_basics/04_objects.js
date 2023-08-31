// Singleton object

const user = new Object()
console.log(user);            //{}


user.id = "123abc";
user.name = "abc";
user.isLoggedIn = false;

console.log(user);

const regularUser = {
    emal: "sumant@google",
    name: {
        fullName:{
            firstName: "Sumant",
            lastName: "kumar"
        }
    }
}
// console.log(regularUser);
console.log(regularUser.name);
console.log(regularUser.name.fullName.firstName);

const obj1 = {
    1: "a",
    2: "b"
}
const obj2 = {
    3: "c",
    4: "d"
}
// const obj3 = {obj1, obj2};
// const obj3 = Object.assign({}, obj1, obj2);      //To concat two object
const obj3 = {...obj1, ...obj2};                    //Better way to concat
console.log(obj3);

const user1 = [
    {
        id: "1",
        email: "some...@gmail"
    },
    {
        id: "1",
        email: "some1@gmail"
    },
    {
        id: "1",
        email: "some@gmail"
    },
    {
        id: "1",
        email: "some@gmail"
    }
]
console.log(user1[1].email);
console.log(user1[2].email);
console.log(user1[0].email);

console.log(Object.keys(user));      //It will print the key of user object in array form
console.log(Object.values(user));      //It will print the vaue of user object in array form
console.log(Object.entries(user));

console.log(user.hasOwnProperty('isLoggedIn'))             //true
console.log(user.hasOwnProperty('isLogged'))               //false



// De-structuring


const course = {
    courseName: "Hindi",
    price: 999,
    courseInstructor: "Sumant"
}
console.log(course.courseInstructor);
console.log(course["courseInstructor"]);


const {courseInstructor: instructor} = course;
console.log(instructor); 


//JSON Object

// {
//     "name": "Sumant",
//     "coursename": "C Programming",
//     "price": "free"
// }



[
     {},
     {},
     {},
     {}
]