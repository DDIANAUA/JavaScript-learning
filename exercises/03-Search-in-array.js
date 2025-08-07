// Search in array
//descr: 

"use strict";

let defaultNames = ["Anna", "John", "Diana", "Mike"];
let userName = prompt("Enter a name: ");

if(defaultNames.includes(userName)){
	console.log(`The name ${userName} is in the 'defaultNames' array`);
} else {
	console.log(`The name ${userName} is not in the 'defaultNames' array`);
}