const name = "Sumant";                //String declaration
let repoNumber = 7646;

// console.log(name + number + "@");

console.log(`Hello All,My name is ${name} and my repoNumber is ${repoNumber}`);

const n = new String("Sumant-kumar");        //String declaration
// console.log(n);
// console.log(n[0]);
// console.log(n.length);
// console.log(n.toUpperCase());
// console.log(n.charAt(2));
// console.log(n.indexOf('S'));

const newN = n.substring(0,8);
// console.log(newN);
const newNOne = n.slice(-11,4);
console.log(newNOne);

const newName = "   Ayush   "
console.log(newName);
console.log(newName.trim());

const url = "https://scienceExpertise@Sumant%20kumar";
console.log(url.replace('%20','-'));
console.log(url.includes('sumant'));
console.log(url.includes('science'));


const myName = new String('Sumant-Kumar-Shandilya')
console.log(myName.split('-'));
console.log(myName.concat(' is a good boy.'));
console.log("Sumant".concat(" is a good boy"));
