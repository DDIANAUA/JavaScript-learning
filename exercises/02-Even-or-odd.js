// Even or odd
//decsr: 

"use strict";

let userNumber = +prompt("Enter any number: ");

if(userNumber % 2 === 0){
	console.log("Even number");
} else if(userNumber % 2 === 1){
	console.log("Odd number");
} else {
	console.log("Error");
}