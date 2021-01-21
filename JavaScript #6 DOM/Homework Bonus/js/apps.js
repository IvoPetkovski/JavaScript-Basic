// Homework Bonus

let recipe = prompt("Enter the name of the recipe!");
let numIngredients = parseInt(prompt("Enter the number of ingredients! (with a number)"));

let heading = document.createElement("h1");
let list = document.createElement("ul");
let div = document.createElement("div");
let table = document.createElement("table");

table.id = "table";
table.border = "1";
let tableHead = document.createElement("thead");
tableHead.id = "table-head";
let tableHeadCell = document.createElement("th");
tableHeadCell.id ="table-head-cell";
let tableBody = document.createElement("tbody");
tableBody.id = "table-body";
let tableRowHead = document.createElement("tr");
tableRowHead.id = "table-row-head";

for(let i = 0; i < numIngredients; i++){
    let ingredient = prompt(`Enter ingredient number ${i+1} `)

    let li = document.createElement("li");
    li.innerText = ingredient;
    list.appendChild(li);

    let tableRow = document.createElement("tr");
    tableRow.id = "table-row";

    for(j=0;j<=0;j++) {
        let tableCell = document.createElement("td");
        tableCell.id = "table-cell";
        let textNode1 = document.createTextNode(ingredient);
        tableCell.appendChild(textNode1);
        tableRow.appendChild(tableCell);
        tableBody.appendChild(tableRow);
    }
}

heading.innerText = recipe;

let body = document.getElementsByTagName("body")[0];
body.appendChild(heading);
body.appendChild(list);
body.appendChild(div);
div.appendChild(table);

let node1 = document.getElementById("table");
let textNode = document.createTextNode(recipe);
tableHeadCell.appendChild(textNode);
tableHead.appendChild(tableRowHead);
tableRowHead.appendChild(tableHeadCell);
node1.appendChild(tableHead);
node1.appendChild(tableBody);