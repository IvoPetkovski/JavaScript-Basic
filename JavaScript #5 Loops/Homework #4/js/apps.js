// Homework #4

let first = ["Bob", "Jill", "John", "Nikola", "Ivan"];
let last = ["Bobsky", "Jillsky", "Doe", "Nikolovski", "Petkovski"];
let fullNames = [];

for(let i = 0; i < first.length; i++){
    let fullName = (i+1) + ". " + first[i] + " " + last[i];
    fullNames.push(fullName);
}
console.log(fullNames);