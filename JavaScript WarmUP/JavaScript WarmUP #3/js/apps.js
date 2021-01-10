// Zadaca #3

let numA = prompt("Vnesi prv broj");
let numB = prompt("Vnesi vtor broj");
let razlika1;
let razlika2;

console.log(`Prviot vnese broj e ${numA}`);
console.log(`Vtoriot vnesen broj e ${numB}`);


if(numA < 0){
    console.log(`Vneseniot broj ${numA} e negativen broj!`);
    razlika1 = 100 - numA;
}
else if(numA >= 100){
    razlika1 = numA - 100;
} 
else{
    razlika1 = 100 - numA;
}

if(numB < 0){
    console.log(`Vneseniot broj ${numB} e negativen broj!`);
    razlika2 = 100 - numB;
}
else if(numB >= 100){
    razlika2 = numB - 100;
} 
else {
    razlika2 = 100 - numB;
}

if(razlika1 > razlika2){
    console.log(`Brojot ${numB} e poblizu do 100`);
}
else if(razlika1 < razlika2){
    console.log(`Brojot ${numA} e poblizu do 100`);
}
else{
    console.log(`Dvata broja se podednakvo blizu do 100`);
}