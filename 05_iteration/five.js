// Adding 10 to each array element


const num = [1,2,3,4,5,6,7,8]


num.filter( (item) => {
    // console.log(item + 10)
})

// Another way

const newArr = []
num.forEach((item) => {
    newArr.push(item+10)
})

// console.log(newArr)

// using map 

const newArr1 = num.map( (item) => item + 10 )
// console.log(newArr1)


// Chaining

const newArr2 = num.map( (item) => item * 10)
   .map( (item) => item + 1)
   .filter( (item) => item >=40)

   console.log(newArr2)