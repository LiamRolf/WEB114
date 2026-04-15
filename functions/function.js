//Liam Rolf 4/14/26 Functions homework
let counter = parseInt(0)
let gasTotal = parseInt(0)
//Declare Variables
let username = prompt(`Enter your name.`)?.trim()?? "Guest";
if (username === ""){
    alert("Please enter a valid name")
}
else if (username === null){
    alert("Program Cancelled.")
}
console.log(`Hello, ${username}`);
function calcAvg(gasInput){
    gasInput = parseInt(prompt(`Enter gas ticket costs, enter "-1" to submit.`))
    do{
        gasTotal = gasTotal + gasInput;
        console.log (gasTotal);
        counter ++;
        gasInput = parseInt(prompt(`${counter} Tickets entered, enter "-1" to submit.`))
    }
    while(gasInput != -1)
    if (counter === 0){
        alert(`No tickets were input.`)
    }
    else if (gasTotal === 0){
        alert(`You spent no money on gas.`)
    }
    else{
        average = gasTotal / counter;
        alert(`Hello, ${username},
            You spent ${gasTotal} on gas tickets this week.
            Your average gas ticket this week costed ${average}.`)
    }
}
calcAvg();
let nextWeek = confirm(`Would you like to calculate the total for another week? ["OK" for yes, "Cancel" for no.]`);
if (nextWeek = "true"){
    calcAvg();
}
else{
    alert("Calculations completed.")
}