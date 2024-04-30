// let name = "Sumant"
// let roll = 21316
let name1 = new String("Sumant")
let roll1 = new Number(21316)
// console.log(name1.toUpperCase())

// Random() 

let random = Math.floor((Math.random()*10))     //0 to 9
// console.log(random)

let random4 = Math.floor((Math.random()*11))     //0 to 10
// console.log(random4)

let random5 = Math.floor((Math.random()*10)+1)     //1 to 11
// console.log(random5)

let random1=Math.floor((Math.random()*10)+1)    //1 to 10
// console.log(random1)


let min = 10;
let max = 20;
let random3 = Math.floor((Math.random()*(max-min))+min)   //10 to 19(Inclusive 10 only)
// console.log(random3)

let random6 = Math.floor((Math.random()*(max-min)+1)+min) //10 to 20(Inclusive 10 and 20 both)
console.log(random6)