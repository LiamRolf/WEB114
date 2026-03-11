// Liam Rolf classwork 3/11/26

let bill = parseFloat(prompt("What's the bill?"));
let budget = parseFloat(prompt("what's your budget?"))
let percentile = (bill / 100)
let tax = (percentile * 10);
let tip = (percentile * 20);
let total = (bill + tax + tip);
if (total > budget){
    alert(`That's over budget! You can't afford that!`)
};

console.log(`The bill is $${bill.toFixed(2)}
the tax is $${tax.toFixed(2)}
the tip is $${tip.toFixed(2)}
the total is $${total.toFixed(2)}`)