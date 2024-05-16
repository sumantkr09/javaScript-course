// Immediately Invoked Function Expressions (IIFE)
            //   used to automatically execute the function,it also helps to remove
                                                                //  the pollution of global variabl


// function chai(){
//     console.log('DB connected')
// }
// chai()



// const chai = () => {
//     console.log('DB connected')
// }
// chai()

// iife

(function chai(){
    console.log('DB connected')
})();          //Semicolon is must to write another iife

(
    () => {
        console.log('DB connected 2')
    }
)();



(
    (name) => {
        console.log(`DB connected 2 ${name}`)
    }
)("Sumant")