// Liam Rolf classwork 3/11/26

"use strict"

//Alerts, Prompts, and Confirms require a browser to function properly, as well as associated .html code
let age = parseInt(prompt("Enter your age:"))

if (age >= 21){
    alert(`Don't drink and vote!`);}
else if(age >= 18){
    alert(`You can vote!`)}    
else{
    alert(`You can't vote!`)
    let yearsTo = (18 - age);
    let plural = "s"
    if (yearsTo == 1){plural = ""}
    alert(`You will be able to vote in ${yearsTo} year${plural}.`)}
