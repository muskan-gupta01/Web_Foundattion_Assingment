let secretNumber = 7;
let guesses = [3, 9, 7];

for (let i = 0; i < guesses.length; i++) {
    let guess = guesses[i];

    console.log("Your guess: " + guess);

    if (guess === secretNumber) {
        console.log("Correct! You guessed the number.");
        break;
    } else if (guess < secretNumber) {
        console.log("Too low! Try a bigger number.");
    } else {
        console.log("Too high! Try a smaller number.");
    }
}
