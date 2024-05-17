// if,if-else
// switch

const month = 3
switch(month)
{
    case 1:
        console.log("Jan");
        break;

    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("March");
        // break;
    case 4:
        console.log("April");
        // break;
    default:
        console.log("Not defined")
        break;
}

// falsy  values

// 0, -0, false, undefined, null, NAN, "", BigInt 0n

// truthy values
// "0", 'false', [], {}, function(){}, " "


const userEmail = []
if(userEmail.length == 0)
    {
        console.log("UserEmail is empty");
    }

const myObj = {}
if(Object.keys(myObj).length == 0)
    {
        console.log("myobj is empty");
    }




// if(false == 0)
//     {
//         console.log("1")
//     }

// if(false == '0')
//     {
//         console.log("1")
//     }
        
// if(false == "")
//     {
//         console.log("1")
//     }
// if(0 == '')
//     {
//         console.log("1")
//     }


// ********************Nullish Coalescing Operator (??) : null undefined****************

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 15 
// val1 = null ?? null
// val1 = null ?? undefined
val1 = undefined ?? null
console.log(val1)

