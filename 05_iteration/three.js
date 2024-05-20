// for each

const coding = ["js", "c", "c++", "python"]
coding.forEach(function(val){
    //  console.log(val)
})

coding.forEach( (item) => {
    // console.log(item)
})


coding.forEach( (item, index, arr) => {
    // console.log(item, index, arr)
})




// *************************Important**********************
// To access the object inside array



const code = [
    {
        language: "javaScript",
        languageFile: "js"
    },
    {
        language: "java",
        languageFile: "java"
    },
    {
        language: "python",
        languageFile: "py"
    }
]

code.forEach( (item)=> {
    console.log(item.languageFile)
})
