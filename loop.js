//pizza time
let friendNum = 2;
while (friendNum > 0){
    console.log(`Pizza number ${friendNum} has been baked`);
    friendNum--;
}
//baaaaaa
let whileSheep = 1;
while (whileSheep <= 3){
    console.log(`${whileSheep} Sheep`);
    whileSheep++;}
    console.log(`Z...Z...Z...`)
//MY NAME IS JOHN JAVASCRIPT!!!
let usernameDo;
do {
    usernameDo = prompt(`Please enter your name and avoid hitting cancel`)?.trim()?? "Guest";
}
while (usernameDo === "" || usernameDo ===null);
console.log(`Hello, ${usernameDo}`);
//Guessing Game
let guessANum;
let secretNumber = Math.floor(Math.random() * 10) + 1;
let numGuesses = 0;
do {
    guessANum = parseInt(prompt(`Guess a number between 1 and 10, ${usernameDo}!`));
    numGuesses++;
    if (guessANum != secretNumber){
        alert(`Wrong number, ${usernameDo}! Guess again!`)
    }
}
while (guessANum !== secretNumber);
console.log(`Congrats, ${usernameDo}! You guessed the number!`);

const colors = ['red', 'blue', 'green', 'purple', 'orange', 'yellow', 'pink'];
let i = 0;
while (i < colors.length){
    console.log(`slot ${i} is ${colors[i]}`);
    i++;
}