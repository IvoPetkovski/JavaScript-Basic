// Homework #1

let storyElements = [];
let input;
let containsOnlyDigits;

function storyTime(){
            input = prompt("Enter a name");
            containsOnlyDigits = /^[0-9]+$/;
            while(containsOnlyDigits.test(input)){
                alert("You have entered a number, try again!");
                input = prompt("Enter a name");
            }
            if(input === null){
                return;
            }
                storyElements.push(input);

            input = prompt("Enter a mood");
            containsOnlyDigits = /^[0-9]+$/;
            while(containsOnlyDigits.test(input)){
                alert("You have entered a number, try again!");
                input = prompt("Enter a mood");
            }
            if(input === null){
                return;
            }
                storyElements.push(input);

            input = prompt("Enter an activity");
            containsOnlyDigits = /^[0-9]+$/;
            while(containsOnlyDigits.test(input)){
                alert("You have entered a number, try again!");
                input = prompt("Enter an activity");
            }
            if(input === null){
                return;
            }
                storyElements.push(input);

            // console.log(storyElements);
    alert(`This is ${storyElements[0]}, ${storyElements[0]} is a nice person. Today he is ${storyElements[1]}. He is ${storyElements[2]} all day. The end.`);
}

storyTime();