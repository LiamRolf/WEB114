// Simple Movies Logical Operators Checker

// Ask for movie and age
const movie = prompt(`What movie do you want to watch?
Choices: Dune, Moana, Project Hail Mary, Deadpool`);
const age = Number(prompt("How old are you?"));

// Convert movie to lowercase for easier comparison
const movieLower = movie.toLowerCase();

// List of allowed movies
const allowedMovies = ["dune", "moana", "project hail mary", "deadpool"];

// === LOGICAL OPERATORS PRACTICE ===

// 1. AND (&&) → must be allowed movie AND old enough
const isAllowedMovie = allowedMovies.includes(movieLower);
const isOldEnough = age >= 13;
const canWatchWithAnd = isAllowedMovie && isOldEnough;

// 2. OR (||) → Minecraft Movie OR Moana
const isMoana = movieLower.includes("moana");
const isHailMary = movieLower.includes("hail mary");
const canWatchWithOr = isMoana || isHailMary;

// 3. NOT (!) → not old enough
const isTooYoung = !isOldEnough;

// === FINAL DECISION ===
if (canWatchWithAnd) {
  alert(`Great! You can watch "${movie}" because it is allowed AND you are old enough.`);
} 
else if (canWatchWithOr) {
  alert(`You can watch "${movie}" because you chose Moana OR Project Hail Mary.`);
} 
else if (isTooYoung) {
  alert(`Sorry, you are too young to watch "${movie}".`);
} 
else {
  alert(`Sorry, "${movie}" is not allowed today.`);
}