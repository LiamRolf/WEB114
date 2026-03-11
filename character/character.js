//Liam Rolf character.js assignment

"use strict";

alert(`Welcome to the Adventure Realm! Let's create your hero!`)

const characterName = prompt(`Enter your name:`);

const companion = prompt(`What kind of pet does ${characterName} have?`)

const superPower = prompt(`What special power does ${characterName} have?`)

const likesFighting = confirm(`Does ${characterName} fight monsters? ["OK" for YES, "Cancel" for NO.]`)

alert(`Gathering magic for ${characterName}, almost ready!`)
//I love that this loading screen is so unnecessary considering how little code is actually being run here

alert(`======================================
    Summary:
    Name: ${characterName}
    Pet: ${companion}
    Power: ${superPower}
    Battles monsters: ${likesFighting}
    ======================================
    The brave warrior ${characterName} travels across the lands on the mighty ${companion}, wielding the ancient power of ${superPower}.
    ======================================`)
