// Part #2

let race;
let dog;
let human;

function humanDogDogHuman(num1){
    race = prompt("Odberete od ovie 2 opcii za natamosnata konverzija: \n-kuceski \n-covecki");
    if(race === "kuceski"){
        dog = parseInt(prompt("Odbravte kuceski godini, vnesete za konverzija vo covecki"));
        num1 = dog * 7;
        console.log(`Vnesenite kuceski godini vo covecki se: ${num1}`)
    }
    else {
        human = parseInt(prompt("Odbravte covecki godini, vnesete za konverzija vo kuceski"));
        num1 = human / 7;
        console.log(`Vnesenite covecki godini vo kuceski se: ${num1}`)
    }
}

humanDogDogHuman();