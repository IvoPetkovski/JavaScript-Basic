let num = 10000;

function getDividableNumbers(num) {
    let arrayNumbers = [];
    for(let i = 0; i < num; i++){
        if(i % 3 == 0 && i % 7 == 0){
            arrayNumbers.push(i);
        }
    }
    return arrayNumbers;
}


let array = getDividableNumbers(num);
console.log(array);