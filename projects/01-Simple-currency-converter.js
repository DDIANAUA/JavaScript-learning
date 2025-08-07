// Mini project: Simple currency converter
// Descr: The user inputs an amount in euros. The script converts it to dollars.

"use strict";

let euro = +prompt("enter the amount of cryptocurrency (dollars): ");

let dollars = euro * 1.17 //data 07.08.2025

if(isNaN(euro)){
	console.log("please enter correct data");
} else if (euro <= 0){
	console.log("your currency amount must be greater than 0");
} else {
	console.log(`result: ${euro} euros equal ${dollars} dollars`);
}