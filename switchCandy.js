let favoriteCandy = prompt("What is your favorite Halloween candy?");
// If user clicks Cancel, prompt returns null
if (favoriteCandy === null) {
alert("Aw, you canceled! No candy for you!");
} else {
switch (favoriteCandy.toLowerCase()) {
case "skittles":
confirm("Taste the rainbow!");
break;
case "snickers":
confirm("Satisfy your cravings!");
break;
case "twix":
confirm("Left side or right side?");
break;
case "reeses":
confirm("Peanut butter cups, the ultimate combo!");
break;
default:
confirm("That's a unique choice! Enjoy your candy!");
}
}
