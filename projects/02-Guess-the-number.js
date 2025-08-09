// Guess the number

"use strict";

let secretNumber = 58;
let guessNumber;
let isguessed = false;
let attempts = 0;

while(!isguessed){
	attempts++;
	guessNumber = Number(prompt("Enter an any number: "));
	if(guessNumber === secretNumber){
		console.log(`GOOD! You guessed it in ${attempts} attempts`);
		isguessed = true;
	} else if (guessNumber < secretNumber){
		console.log("Bad, your number is less than that number((((");
	} else if (guessNumber > secretNumber){
		console.log("Bad, your number is greater than that number((((");
	} else {
		console.log("Error");
	}
}