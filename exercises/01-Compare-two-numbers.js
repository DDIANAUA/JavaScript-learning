// Compare two number
// descr: Ask the user to enter two numbers. Print the larger one, or a message if they are equal.

"use strict";

let num1 = +prompt("Enter first number: ");
let num2 = +prompt("Enter second number: ");

console.log(typeof num1);

if(num1 > num2){
	console.log("num1 is greater than num2");
} else if (num1 < num2){
	console.log("num1 is less than num2");
} else if(num1 === num2){
	console.log("num1 and num2 are equal");
} else {
	console.log("Error");
}