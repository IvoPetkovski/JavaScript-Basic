// Homework #2

let coupleOfNumbers = [];
let num;
let sum = 0;

function sumNumbers(){
    
        for(let i = 0; i <= 4; i++){
            num = parseInt(prompt(`Vnesete go ${i+1}-ot broj!`));
            let validNumber = validateNumber(num);
            if(!validNumber){
                return;
            }
            coupleOfNumbers.push(num);
            sum += coupleOfNumbers[i];
        }
        console.log(coupleOfNumbers);       
        console.log(`Sumata na vnesenite 5 broevi e ${sum}`);
}

function validateNumber(num){
    if(isNaN(num)){
        alert("Vnesovte pogresna variabla!");
        return false;
    }
    else{
        return true;
    }
}

sumNumbers();