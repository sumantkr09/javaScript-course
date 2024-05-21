// reduce 

const num = [1,2,3]

// const ans = num.reduce( function(acc, currval){
//     return acc + currval
// },0)


const ans = num.reduce( (acc,currval) => acc + currval, 0)



// console.log(ans)



// Adding shoppingCart value



const shoppingCart = [
    {
        name: "js course",
        price: 2000
    },
    {
        name: "python",
        price: 1000
    },

    {
        name: "React",
        price: 3000 
    }
]

const total = shoppingCart.reduce( (acc, item) => acc + item.price, 0)

console.log(total)