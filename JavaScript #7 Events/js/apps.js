// Homework Dynamic Table

let header = document.createElement("h1");
header.innerHTML = "Dynamic Table";

let body = document.getElementsByTagName("body")[0];
body.appendChild(header);

let labelRows = document.createElement('label');
let inputRows = document.createElement('input');
inputRows.type = 'text';
labelRows.for = 'rows';
inputRows.id = 'rows';
inputRows.style.marginBottom = '10px';
labelRows.innerHTML = 'Enter the number of rows! ';
body.appendChild(labelRows);
body.appendChild(inputRows);
body.appendChild(document.createElement('br'));


let labelColumns = document.createElement('label');
let inputColumns = document.createElement('input');
inputColumns.type = 'text';
labelColumns.for = 'columns';
inputColumns.id = 'columns';
inputColumns.style.marginRight = '10px';
labelColumns.innerHTML = 'Enter the number of columns!';
body.appendChild(labelColumns);
body.appendChild(inputColumns);


let generateButton = document.createElement('button');
body.appendChild(generateButton);
generateButton.innerText = 'Generate';

let paragraph = document.createElement('p');
paragraph.id = 'paragraph';
body.appendChild(paragraph);
let counter = 0;

function generateTable(r, c){
    let body = document.getElementsByTagName('body')[0];
    let table = document.createElement('table');
    table.id = `table${counter}`;
    table.border = '2';
    table.style.width = '500';
    let tableBody = document.createElement('tbody');
    for(let i = 0; i < r; i++){
        let tableRow = document.createElement('tr');
        for(let j = 0; j < c; j++){
            let tableCell = document.createElement('td');
            tableCell.innerText = `Row - ${i+1}\n Column - ${j+1}`;
            tableCell.style.padding = '5px';
            tableRow.appendChild(tableCell);
        }
        tableBody.appendChild(tableRow);
    }
    table.appendChild(tableBody);
    body.appendChild(table);
}

generateButton.addEventListener('click', function(){
    let resultRows = document.getElementById("rows").value;
    let resultColumns = document.getElementById("columns").value;
    let numResult1 = Number(resultRows);
    let numResult2 = Number(resultColumns);
    let arr = [resultRows, resultColumns];

    let table = document.getElementsByTagName('table')[0];
    if(table) body.removeChild(table);

    if(resultRows === "" || resultColumns === ""){
        paragraph.innerHTML = "";
        paragraph.innerHTML = "Please do not leave empty fields!";
        paragraph.style.fontSize = "20px";
        document.getElementById("rows").value = "";
        document.getElementById("columns").value = "";
    }
    else if(numResult1 === 0 || numResult2 === 0){
        paragraph.innerHTML = "";
        paragraph.innerHTML = "Each of the numbers should be above 0!";
        paragraph.style.fontSize = "20px";
        document.getElementById("rows").value = "";
        document.getElementById("columns").value = "";
    }
    else if(Number.isNaN(numResult1) || Number.isNaN(numResult2)){
        let paragraph11 = document.getElementById("paragraph");
        paragraph11.innerHTML = "You have entered incorrect value. Please enter numbers in the fields!";
        paragraph.style.fontSize = "20px";
        inputRows.value = "";
        inputColumns.value = "";
    }
    else{
        let paragraph12 = document.getElementById("paragraph");
        paragraph12.innerHTML = "";
        counter++;
        generateTable(arr[0],arr[1]);
        inputRows.value = "";
        inputColumns.value = "";
    }
});