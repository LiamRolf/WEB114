//Liam Rolf 4/8/26 Class Program Notes
function greetEveryone(){  //Name the function and declare its parameters!
    console.log("Hello, friend!");  //Da good stuff in the function!
};
console.log("This is the function before the call :P")

greetEveryone();  //Calling the function is what runs the code you put inside it :3

//Age checker

function checkAge(age){
    if (age < 18) {
        return "You are too young.";
        console.log(`This won't print`)
    }
}

let ageResult = checkAge(15);
console.log(ageResult);

//Say hi

let greet = function(name) {
    console.log(`Hello ${name}`);
}

greet("Alice");

//Friend Hi

function hello(friendName) {
    return `Hllo, ${friendName}!`;
}
let userName = prompt(`What is your name?`);
let message = hello(userName);
alert(message);

//Say hello to my little friend(s)

function helloFriends(friendName1, friendname2){
    return `Hello, ${friendName1} and ${friendname2}`
}

let firstFriend = userName;
let firstNewFriend = prompt(`what is your first friend's name?`);
let secondFriend = prompt(`What is your second friend's name?`);

let friendMessage = helloFriends(firstFriend, secondFriend);
alert(friendMessage);