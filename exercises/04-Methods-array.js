"use strict";

// =============================================

// Ex 1
// push()/pop()

// const fruits = ["apple", "banana", "orange",];
// console.log(fruits);

// fruits.push("pear", "kiwi");
// console.log(fruits);

// let deleted = fruits.pop();
// console.log(deleted);

// =============================================

// Ex 2
// shift()/unshift()

// let numbers = [17, 34, 98,];
// console.log(numbers);

// numbers.unshift(0);
// console.log(numbers);

// let firstDeletedElement = numbers.shift();
// console.log(firstDeletedElement);

// =============================================

// Ex 3
// length

// const someArray = ["Hello", 3, 98, "Diana", true];
// console.log(someArray);
// console.log(someArray.length);

// someArray.push("lalala");
// console.log(someArray);
// console.log(someArray.length);

// =============================================

// Ex 4
// indexOf()/includes()

// const colors = ["red", "blue", "green", "yellow"];

// let greenIndex = colors.indexOf("green");
// console.log(greenIndex);

// let isInclBlack = colors.includes("black");
// console.log(isInclBlack ? "black is included" : "black isn`t included");


// =============================================

// Ex 5
// find()/findIndex()

// const numbers = [10, 25, 30, 50, 60];
// const theNumber = numbers.find((num) => num > 30);
// console.log(theNumber);

// const theNumberIndex = numbers.findIndex((num) => num === theNumber);
// console.log(theNumberIndex);

// =============================================

// Ex 6
// map()

// const numbers = [5, 10, 15, 20, 25];

// const newNumbersListPow = numbers.map(n => n ** 2);
// console.log(newNumbersListPow);

// const newNumbersListToString = numbers.map(n => n.toString());
// console.log(newNumbersListToString);

// =============================================

// Ex 7
// filter()

// const numbers = [5, 10, 15, 20, 25,];

// const newNumbers15 = numbers.filter(n => n > 15);
// console.log(newNumbers15);

// const evenNumbers = numbers.filter(function(n) {
	// 	if((n % 2) === 0){
		// 		return n;
		// 	}
		// });
		
		// const evenNumbers = numbers.filter(n => n % 2 === 0);
		
		// console.log(evenNumbers);
		
// =============================================

// Ex 8
// sort()

// const numbers = [50, 2, 100, 25];
// console.log(numbers.sort((a, b) => a - b));

// const fruits = ["banana", "apple", "cherry"];
// console.log(fruits.sort());

// Ex 9
// reverse()

// const numbers = [1, 2, 3, 4, 5];

// console.log(numbers.reverse());

// =============================================

// Ex 10
// splice()

// const fruits = ["apple", "banana", "cherry", "orange"];

// fruits.splice(1, 1);
// console.log(fruits);

// fruits.splice(1, 0, "kiwi");
// console.log(fruits);

// =============================================

// Ex 11
// slice()

// const letters = ["a", "b", "c", "d", "e"];

// const newLettersList = letters.slice(1, 4);
// console.log(newLettersList);

// =============================================

// Ex 12
// join()

// const someWords = ["HTML", "CSS", "JavaScript"];
// const newSomeWords = someWords.join('+');
// console.log(newSomeWords);

// =============================================

// Ex 13
// concat()

// const arr1 = [1, 2];
// const arr2 = [3, 4];

// const newArr = arr1.concat(arr2);

// console.log(newArr);

// =============================================
