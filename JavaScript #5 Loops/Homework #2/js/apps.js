// Homework #2 

//--------- Ova e so povekje pecatenje na console.log -----------

let row = "";

for(let i = 1; i <= 20; i++){
    if(i % 2 != 0){
        row = row + i + " ";
    }
    else{
        row = row + i;
        console.log(row);
        row = "";
    }
}

console.log("--------------------------------------")

//--------- Ova e so edno pecatenje na console.log -----------

row = "";

for(let i = 1; i <= 20; i++){
    if(i % 2 != 0){
        row = row + i + " ";
    }
    else{
        row = row + i + "\n";
    }
}

console.log(row);