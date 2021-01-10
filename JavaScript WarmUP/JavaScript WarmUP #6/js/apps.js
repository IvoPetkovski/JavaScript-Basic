// Zadaca #6
let grade1 = parseInt(prompt("Vnesete ja prvata ocena"));
let grade2 = parseInt(prompt("Vnesete ja vtorata ocena"));
let grade3 = parseInt(prompt("Vnesete ja tretata ocena"));
let grade4 = parseInt(prompt("Vnesete ja cetrvtata ocena"));
let grade5 = parseInt(prompt("Vnesete ja petata ocena"));

let averageGrade = (grade1 + grade2 + grade3 + grade4 + grade5) / 5;

if(averageGrade >= 8){
    console.log(`Vi cestitame go pominavte semestarot! Vasiot prosek e ${averageGrade}!`);
}
else {
    console.log(`Se izvinuvame no ne go pominavte ovoj semestar. Vasiot prosek e ${averageGrade}`);
}