let birthYear = prompt("Vnesete godina na ragjanje");

let zodiacCalc = (birthYear - 4) % 12;

if(zodiacCalc === 0){
    console.log("You're a Rat");
} else if(zodiacCalc === 1){
    console.log("You're an Ox");
} else if(zodiacCalc === 2){
    console.log("You're a Tiger");
} else if(zodiacCalc === 3){
    console.log("You're a Rabbit");
} else if(zodiacCalc === 4){
    console.log("You're a Dragon");
} else if(zodiacCalc === 5){
    console.log("You're a Snake");
} else if(zodiacCalc === 6){
    console.log("You're a Horse");
} else if(zodiacCalc === 7){
    console.log("You're a Goat");
} else if(zodiacCalc === 8){
    console.log("You're a Monkey");
} else if(zodiacCalc === 9){
    console.log("You're a Rooster");
} else if(zodiacCalc === 10){
    console.log("You're a Dog");
} else if(zodiacCalc === 11){
    console.log("You're a Pig");
} 
else{
    console.log("Vnesi godina so brojki!");
}