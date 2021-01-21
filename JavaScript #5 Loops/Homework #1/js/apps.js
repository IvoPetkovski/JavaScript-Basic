// Homework #1

let inputArray = [];
let size = parseInt(prompt("Vnesete broj na zborovi! (so brojka)"));

while(isNaN(size)){
    alert("Ne vnesovte broj, probajte povtorno!");
    size = parseInt(prompt("Vnesete broj na zborovi! (so brojka)"));
}

for(let i = 0; i < size; i++){
    let word = prompt(`Vnesete go ${i+1}-ot zbor!`);
    if(word == null){
        break;
    }
    inputArray[i] = word;
}
if(inputArray.length > 0){
    let finalSentence = getSentence(inputArray);
    alert(finalSentence);
}
else{
    alert("Ne vnesovte nitu eden zbor!");
}

function getSentence(inputArray){
    let sentence = "";
    for(let j = 0; j < inputArray.length; j++){
        if(j == inputArray.length - 1){
            sentence = sentence + inputArray[j] + "!";
            continue;
        }
        sentence = sentence + inputArray[j] + " ";
        console.log(sentence);
    }
    return sentence;
}