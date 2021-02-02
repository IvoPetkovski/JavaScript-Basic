let namesArray = ["Bill", "Ana", "Josephine", "Elena"]; 
let namesLengthArray = [];


function mapToArrayElementsLength(arr) {
    for (let i = 0; i < arr.length; i++) {
        let wordLength = arr[i].length;
        namesLengthArray.push(wordLength);
    }
    
}

mapToArrayElementsLength(namesArray);
console.log(namesLengthArray);