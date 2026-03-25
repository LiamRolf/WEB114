const number = Number(prompt("Enter a number between 10 and 20!"));
if (number <= 20 && number >= 10){console.log(`This number is between 10 and 20!`)}
else if (number < 10){console.log(`That's too small!`)}
else if (number > 20){console.log(`That's too big!`)}
else {console.log(`That's not even a number!`)}