const indian_heros = ["Shaktimaan", "Aryamaan",]
const marvel_heros = ["Iron-Man", "Thor", "Spider-Man"]

// indian_heros.push(marvel_heros);        //It will treat arrays of marvel_heros as single element
// console.log(indian_heros);
// console.log(indian_heros.length);       //3
// console.log(indian_heros[2]);           //["Iron-Man", "Thor", "Spider-Man"]
// console.log(indian_heros[2][1]);        //Thor

indian_heros.concat(marvel_heros);
console.log(indian_heros);               //["Shaktimaan", "Aryamaan",]

// const all_heros = indian_heros.concat(marvel_heros);
// console.log(all_heros);


// Spread techniques

const all_new_heros = [...indian_heros, ...marvel_heros]    //More popular to concat two or more arrays
console.log(all_new_heros);

// flat

const another_array = [1, 2, 3, 4, [5, 6, 7], [6, 7, 8, [9, 10]]];
const another_real_array = another_array.flat(Infinity);
// console.log(another_real_array);


console.log(Array.isArray("Sumant"));
console.log(Array.from("Sumant"));
console.log(Array.from({name: "Sumant"}));   //Interesting.....Output will be []


let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));







