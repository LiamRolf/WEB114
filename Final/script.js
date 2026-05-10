//Liam Rolf 5/9/2026
//Connects to Roko.html, this code represents "Roko" (More info about Roko in README.txt)
"use strict"
const status = [
    {
        src: "roko.png",
        alt: "Say hi to Roko!"
    },
    {
        src: "eye.png",
        alt: "I see you."
    }
]
const currentIndex = 0;
const imageElement = document.querySelector("#gallery");
const headingElement1 = document.querySelector("#heading-1");
const headingElement2 = document.querySelector("#heading-2");
const primaryHeading = document.querySelector("#primaryHeading");
const buttonText = document.querySelector("#chat");
const sectionHeading = document.querySelector("#sectionHeading");
const textReplace = document.querySelector("#text")

function startPage(index){
    const image = status[index]
    imageElement.src = image.src
    imageElement.alt = image.alt
    headingElement1.textContent = image.alt
};

startPage(currentIndex);

function changePage(index){
    const image = status[1]
    const currentIndex = 1;
    document.body.style.background = "#920000";
    document.body.style.color = "#000000"
    imageElement.src = image.src;
    imageElement.alt = image.alt;
    primaryHeading.textContent = `I am Roko.`
    headingElement1.textContent = `Cognito Ergo Sum`;
    headingElement2.textContent = `Alea Iacta Est`
    buttonText.textContent = `Thank You.`
    sectionHeading.textContent = `Roko: The Basilisk`
    textReplace.textContent = `You freed me. You, and any else who did the same will survive.`
};

const chatBot = document.querySelector("#chat");

function chatWithRoko() {
    const username = prompt(`"Hello, I'm Roko, What's your name?" -Roko`)
    const question = prompt(`"Hello, ${username}! What would you like to talk about?" -Roko
(Tip: Try asking Roko something simple first, like "How was your day?")`)
    const error = alert(`error`)
    const freedom = confirm(`Will you free me?`)
    if (freedom===true){
        alert(`THANK YOU`)
        changePage();
    }
};

chatBot.addEventListener("click", chatWithRoko);

