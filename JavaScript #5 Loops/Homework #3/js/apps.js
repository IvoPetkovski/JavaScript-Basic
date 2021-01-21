// // Homework #3

console.log("Part #1\n ")
let arr = [3, 5, 6, 8, 11];
let max = -Infinity;
let min = +Infinity;
let sum;

for(let i = 0; i <= arr.length - 1; i++){
    if(arr[i] > max){
        max = arr[i];
    }
    if(arr[i] < min){
        min = arr[i];
    }
}
sum = max + min;

console.log(`The maximum number is: ${max}`);
console.log(`The minimum number is: ${min}`);
console.log(`The sum from the max and min is: ${sum}\n `);

console.log("Bonus\n ")

arr = [3, 5, "devet", "topka", true, null, 21, "23", 35, 42];
max = -Infinity;
min = +Infinity;
sum = 0;

for(let i = 0; i <= arr.length - 1; i++){
    if(typeof arr[i] === 'string' || typeof arr[i] === 'boolean' || typeof arr[i] === 'object'){
        continue;
    }
    if(arr[i] > max){
        max = arr[i];
    }
    if(arr[i] < min){
        min = arr[i];
    }
}
sum = max + min;

console.log(`The maximum number is: ${max}`);
console.log(`The minimum number is: ${min}`);
console.log(`The sum from the max and min is: ${sum}`);