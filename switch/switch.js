let favMonth = prompt("What is your favorite month of the year?");
if (favMonth === null) {
alert("You exited the prompt! reload the page to try again!");
} else {
switch (favMonth.toLowerCase()) {
case "december":
confirm("Your favorite season is winter, I guess you like the cold!");
break;
case "january":
confirm("Your favorite season is winter, I guess you like the cold!");
break;
case "february":
confirm("Your favorite season is winter, I guess you like the cold!");
break;

case "march":
confirm("You like the spring! I bet you don't have pollen allergies!");
break;
case "april":
confirm("You like the spring! I bet you don't have pollen allergies!");
break;
case "may":
confirm("You like the spring! I bet you don't have pollen allergies!");
break;

case "june":
confirm("You're a fan of summer? Hope you've got bug spray and sunscreen before you hit the beaches!");
break;
case "july":
confirm("You're a fan of summer? Hope you've got bug spray and sunscreen before you hit the beaches!");
break;
case "august":
confirm("You're a fan of summer? Hope you've got bug spray and sunscreen before you hit the beaches!");
break;

case "september":
confirm("Fan of autumn, huh? Me too! Have a HAPPY HALLOWEEN!!!! (Or thanksgiving, if turkey's more your style)");
break;
case "october":
confirm("Fan of autumn, huh? Me too! Have a HAPPY HALLOWEEN!!!! (Or thanksgiving, if turkey's more your style");
break;
case "november":
confirm("Fan of autumn, huh? Me too! Have a HAPPY HALLOWEEN!!!! (Or thanksgiving, if turkey's more your style");
break;

default:
confirm("That's not a month, and you know it!");
}
}