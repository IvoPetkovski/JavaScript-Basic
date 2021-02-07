let input = $("#input");
let button = $("#button");
let title = $("#title");
    

button.on('click', function(){
    title.html(`<h1>Hello there ${input.val()}!</h1>`)
});