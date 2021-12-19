let maximum = parseInt(prompt("Enter the maximum number!"));
while (!maximum) {
    maximum = parseInt(prompt("Enter a valid maximum number!"));
}

const targetSum = Math.floor(Math.random() * maximum) + 1

let guess = parseInt(prompt("enter your guess!"));
let attempt = 1;

while (parseInt(guess) !== targetSum) {
    attempt++
    if (guess === "q") break;
    if (guess > targetSum) {
        guess = prompt("too high! Enter a new guess");
    } else {
        guess = prompt("too low! Enter a new guess");
    }
}
if (guess === "q") {
    console.log("you quit!")
} else {
    console.log(`you got it! it tooks ${attempt} guesses.!`)
}