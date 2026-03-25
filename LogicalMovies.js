// Simple Movies Logical Operators Checker

// Ask for movie and age
const movie = prompt(`What movie do you want to watch?
Choices: Dune, Moana, The Minecraft Movie, Deadpool`);
const age = Number(prompt("How old are you?"));

// Convert movie to lowercase for easier comparison
const movieLower = movie.toLowerCase();

// List of allowed movies
const allowedMovies = ["dune", "moana", "the minecraft movie", "deadpool"];

// === LOGICAL OPERATORS PRACTICE ===

// 1. AND (&&) → must be allowed movie AND old enough
const isAllowedMovie = allowedMovies.includes(movieLower);
const isOldEnough = age >= 13;
const canWatchWithAnd = isAllowedMovie && isOldEnough;

// 2. OR (||) → Minecraft Movie OR Moana
const isMoana = movieLower.includes("moana");
const isMinecraftMovie = movieLower.includes("minecraft");
const canWatchWithOr = isMoana || isMinecraftMovie;

// 3. NOT (!) → not old enough
const isTooYoung = !isOldEnough;

// === FINAL DECISION ===
if (canWatchWithAnd) {
  alert(`Great! You can watch "${movie}" because it is allowed AND you are old enough.`);
} 
else if (canWatchWithOr) {
  alert(`You can watch "${movie}" because you chose Moana OR The Minecraft Movie.`);
} 
else if (isTooYoung) {
  alert(`Sorry, you are too young to watch "${movie}".`);
} 
else {
  alert(`Sorry, "${movie}" is not allowed today.`);
}