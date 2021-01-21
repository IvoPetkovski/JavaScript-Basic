// Homework #2

let arr = [3, 5, 7, 9, 11];
let sum = 0;
let equation = "";

let list = document.createElement("ul");
let paragraph = document.createElement("p");
let paragraph1 = document.createElement("p");

for(let i = 0; i < arr.length; i++){
    if(i === arr.length - 1){
        equation = equation + arr[i] + " " + "=" + " ";
    }
    else{
        equation = equation + arr[i] + " " + "+" + " ";
    }
    let li = document.createElement("li");
    li.innerText = arr[i];
    list.appendChild(li);
    sum = sum + arr[i];
}
equation = "( " + equation + sum + " )";
paragraph1.innerText = "The Equation is " + equation;

paragraph.innerText = "Sumata od ovie broevi e " + sum;

let body = document.getElementsByTagName("body")[0]
body.appendChild(list);
body.appendChild(paragraph);
body.appendChild(paragraph1);