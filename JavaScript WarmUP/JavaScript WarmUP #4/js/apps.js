// Zadaca #4
let someNumber = prompt("Vnesi broj");
console.log(`Go vnesovte brojot ${someNumber}`);

let calculate1
let calculate2


if(someNumber < 13){
    calculate1 = 13 / someNumber;
    console.log(`Bidejki brojot sto go vnesovte e pomal od 13, razlikata e ${calculate1}`);
}
else{
    calculate2 = (13 / someNumber) * 2;
    console.log(`Bidejki brojot sto go vnesovte e pogolem od 13, razlikata e ${calculate2}`);
}