// Liam Rolf homework 3/24/26

"use strict";

const hourlyWage = parseFloat(prompt("What is your hourly wage?"));
confirm(`You entered $${hourlyWage} per hour. Is that correct?
    Click OK for YES
    Click CANCEL for NO`);
const hoursWorked = parseFloat(prompt("How many hours did you work this week?"));
confirm(`You entered ${hoursWorked} hours worked. Is that correct?
    Click OK for YES
    Click CANCEL for NO`);
const grossPay = (hourlyWage * hoursWorked);
const tax = ((grossPay / 100) * 10);
const netPay = (grossPay - tax);

console.log(`You earned $${netPay.toFixed(2)}`);
if (hoursWorked > 40){
    console.log(`You worked overtime this week!`)}
else{ 
    console.log(`No overtime this week.`)}
if (netPay > 800){
    console.log(`Great paycheck!`)}
else{ 
    console.log(`Keep working towards a bigger paycheck!`)}