//Liam Rolf fruit sale 3/4/26
"use strict"

const apples = 1.25; //per 1 apple
const oranges = 1.25; //per orange

const applesBought = 3;
const orangesBought = 2;

const applesTotalPrice = apples * applesBought;
const orangesTotalPrice = oranges * orangesBought;

const totalCost = (applesTotalPrice + orangesTotalPrice);

const message = (`You bought ${applesBought} apples and ${orangesBought} oranges. 
Total price of apples is $${applesTotalPrice.toFixed(2)}, total price of oranges is $${orangesTotalPrice.toFixed(2)}, your total is $${totalCost.toFixed(2)}.`);

console.log (message);

//capitalism

