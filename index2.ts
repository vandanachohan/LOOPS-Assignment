// TAST : 2//
// *********** Using WHILE LOOPS  **********//

// Step 1: Set a maximum value
let maxvalue = 100;

// Step 2: Generate a random number
let randomNumber = Math.floor(Math.random() * maxvalue) + 1;
console.log("Random Number: " + randomNumber);

// Step 3: Track the guess status
let isGuessCorrect = false;

// Step 4: Simulate user guesses
let guesses = [20,50, 65, 70, 88, 90];

// Step 5: Iterate over guesses
let i = 0;
while (!isGuessCorrect && i < guesses.length) {
  let guess = guesses[i];
  console.log("Guess: " + guess);
  if (guess === randomNumber) {
    isGuessCorrect = true;
    console.log("Correct Guess!");
  } else {
    if (guess < randomNumber) {
      console.log("Too Low! Try a higher number.");
    } else {
      console.log("Too High! Try a lower number.");
    }
  }
  i++;
}