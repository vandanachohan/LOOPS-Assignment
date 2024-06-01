// TAST : 2//
// *********** Using WHILE LOOPS  **********//
// Step 1: Set a maximum value
var maxvalue = 100;
// Step 2: Generate a random number
var randomNumber = Math.floor(Math.random() * maxvalue) + 1;
console.log("Random Number: " + randomNumber);
// Step 3: Track the guess status
var isGuessCorrect = false;
// Step 4: Simulate user guesses
var guesses = [20, 50, 65, 70, 88, 90];
// Step 5: Iterate over guesses
var i = 0;
while (!isGuessCorrect && i < guesses.length) {
    var guess = guesses[i];
    console.log("Guess: " + guess);
    if (guess === randomNumber) {
        isGuessCorrect = true;
        console.log("Correct Guess!");
    }
    else {
        if (guess < randomNumber) {
            console.log("Too Low! Try a higher number.");
        }
        else {
            console.log("Too High! Try a lower number.");
        }
    }
    i++;
}
