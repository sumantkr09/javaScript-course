let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(myDate.toDateString());
console.log(typeof(myDate));    //Object

// let myCreatedDate = new Date(2023,0,9)
// let myCreatedDate = new Date("2023-01-09")
let myCreatedDate = new Date("09-12-2004")
// console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());


console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time is`

console.log(newDate.toLocaleString('default',{
     weekday: "long",
}
))
