// Liam Rolf classwork 3/11/26

"use strict"

//Alerts, Prompts, and Confirms require a browser to function properly, as well as associated .html code
//let age = parseInt(prompt("Enter your age:"))
let age = (17)

if (age >= 18){
    console.log(`You can vote!`);}    
else{
    console.log(`You can't vote!`)}
    let yearsTo = (18 - age);
    let plural = "s"
    if (yearsTo == 1){plural = ""}
    console.log(`You will be able to vote in ${yearsTo} year${plural}.`)
