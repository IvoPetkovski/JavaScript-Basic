let input1 = $("#input1");
let input2 = $("#input2");
let button = $("button");
let h3 = $("h3");

function isColor(strColor){
    var s = new Option().style;
    s.color = strColor;
    return s.color == strColor;
}

button.on('click',function(){

    if(input1.val() == "" && input2.val() == ""){
        h3.html(`Please enter something in the fields!`);
    }
    else if(isColor(input2.val())){
        h3.html(`${input1.val()}`);
        h3.css('color', `${input2.val()}`);
    }
    else{
        h3.html(`${input2.val()} is not a color!`);
    }

    input1.val("");
    input2.val("");

});
