let animal = {
    name: "name",
    kind: "kind",
    speak: function(message){
        para.innerHTML = `${this.name} is a ${this.kind} and says: ${message}`;
    }
}

let body = document.getElementsByTagName("body")[0];
let para = document.createElement("p");
para.id = "para";
body.appendChild(para);

let button = document.getElementById("button");

button.addEventListener('click', function(){
    let para1 = document.getElementById("para");
    para1.innerHTML = "";
    let input1 = document.getElementById("input1").value;
    let input2 = document.getElementById("input2").value;
    let input3 = document.getElementById("input3").value;


    if(input1 == "" || input2 == ""){
        para1.innerHTML = "Please don't leave empty boxes";
    }
    else if(isNaN(input1) && isNaN(input2)){
        animal.name = input1;
        animal.kind = input2;
        animal.speak(input3);
    }
    else{
        para1.innerHTML = "Please don't use numbers in the fields!";
    }
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
    document.getElementById("input3").value = "";
});