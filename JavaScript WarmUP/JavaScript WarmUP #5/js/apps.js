// Zadaca #5
let number1 = parseInt(prompt("Vnesete go prviot broj"));
let number2 = parseInt(prompt("Vnesete go prviot broj"));

let sum;
let diff;
let multi;


if((number1 >= 20 && number1 <= 30) && (number2 >= 20 && number2 <= 30)){
    sum = number1 + number2;
    console.log(`Sumata na ovie 2 broja e ${sum}`);
} else if((number1 >= 40 && number1 <= 60) && (number2 >= 40 && number2 <= 60)){
    diff = number1 - number2;
    console.log(`Razlikata na ovie 2 broja e ${diff}`);
} else if((number1 >= 80 && number1 <= 100) && (number2 >= 80 && number2 <= 100)){
    multi = number1 * number2;
    console.log(`Proizvodot na ovie 2 broja e ${multi}`);
}
else{
    console.log(`Vnesovte nepravilen broj!`);
}