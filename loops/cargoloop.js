//Liam Rolf 4/7/2026

"use strict"

alert(`-CAIRO STATION CARGO SCANNER-`)
let cargoNum = 1;
let cargoLimit = parseInt(prompt(`Enter total number of crates that require scanning`));
alert(`-BEGINNING OF CARGO MANIFEST-`);
do {
    if (cargoNum % 5 == 0){
        console.log(`Item #${cargoNum}: Fragile equipment alert! Handle cargo according to regulation CB-1045`)
    }
    else if (cargoNum % 2 == 0){
        console.log(`Item #${cargoNum}: Scan successfully complete, please load cargo.`)
    }
    else{
        console.log(`Item #${cargoNum}: ERR// UNKNOWN CARGO ! Please consult regulation UC-3447 for how to check for possible alien life`)
    }
    cargoNum++;
}
while (cargoNum <= cargoLimit);
console.log(`Total number of crates scanned: ${cargoLimit}`)
alert(`-END OF CARGO MANIFEST-`);