const changeColorButton = document.querySelector("#changeColorButton");
const title = document.querySelector("#title");
function changeBackground() {
let randomColor = "#" + Math.floor (Math.random() * 0xfffffff).toString(16).padStart(6, "0");
    document.body.style.backgroundColor = randomColor;
    title.textContent = "The Color Changed When I Clicked the Button";}
changeColorButton.addEventListener("click", changeBackground);
