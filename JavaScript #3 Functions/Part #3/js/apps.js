// Part #3

let cashAtm = 100000;
let cardIn = "";
let balance;
let cashout;

function atm(){
    cardIn = prompt("Odberete tip na usluga: \n-cashout \n-sostojba");
    if(cardIn === "cashout"){
        cashout = parseInt(prompt("Odbravte cashout, vnesete suma koja sakate da ja podignete."));
        while(isNaN(cashout)){
            alert("Ne vnesovte broj, probajte povtorno!")
            cashout = parseInt(prompt("Vnesete suma koja sakate da ja podignete so brojki!"));
        }        
        if(cashout <= cashAtm){
            cashAtm = cashAtm - cashout;
            alert(`Podigate od bankomatot ${cashout} denari, a ostanuvaat ${cashAtm} denari`)
        }
        else{
            alert(`Nemate dovolna sredstva, imate ${cashAtm} denari!`);
        }
    }
    else if(cardIn === "balance"){
        balance = alert(`Odbravte sostojba, vasata segasna sostojba isnesuva ${cashAtm} denari`);
    }
    else {
        return
    }
}

while(cashAtm > 0 && cardIn != null){
    atm();
}