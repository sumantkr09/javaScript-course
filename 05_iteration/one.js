// Higher Order Array loops

// for of  :    Mostly used for array iteration

// ["", "", ""]       Array of string
// [{}, {}, {}]       Array of object

myArr = [1,2,3,4,5]
for (const num of myArr) {
    // console.log(num)
}


// for in

for (const key in myArr) {
//    console.log(key)
console.log(myArr[key])
}


const hello = "Hello World"
for (const hi of hello) {
    if(hi== " "){
        continue;
    }
    // console.log(`Each character is ${hi}`);
}


// Maps : Unique value, maintain the order in which they are inserted

const myMap = new Map()
myMap.set("IN","India")
myMap.set("Ru","Russia")
myMap.set("Bh","Bharat")
// console.log(myMap)

for (const [key, value] of myMap) {
    // console.log(key, ':-', value)
}