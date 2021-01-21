// Homework #1

let paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);
for(let i = 0; i < paragraphs.length; i++){
    paragraphs[i].innerText = "paragraph " + (i+1);
}

let headers = document.querySelectorAll("h1, h3");
console.log(headers);
for(let i = 0; i < headers.length; i++){
    headers[i].innerText = "headers " + (i+1);
}