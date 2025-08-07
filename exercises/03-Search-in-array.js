// Search in array
//descr: You have an array of names: ["Anna", "John", "Diana", "Mike"]
//Check if the name entered by the user exists in the array.

"use strict";

let defaultNames = ["Anna", "John", "Diana", "Mike"];
let userName = prompt("Enter a name: ");

if(defaultNames.includes(userName)){
	console.log(`The name ${userName} is in the 'defaultNames' array`);
} else {
	console.log(`The name ${userName} is not in the 'defaultNames' array`);
}