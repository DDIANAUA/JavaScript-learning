"use strict";

// 1. for loop
for (let i = 1; i <= 5; i++) {
	console.log("For loop iteration:", i);
}

// 2. while loop
let count = 1;
while (count <= 5) {
	console.log("While loop iteration:", count);
	count++;
}

// 3. do...while loop
let num = 1;
do {
	console.log("Do...while loop iteration:", num);
	num++;
} while (num <= 5);

// 4. for...of loop (works with arrays, strings, etc.)
let fruits = ["Apple", "Banana", "Cherry"];
for (let fruit of fruits) {
	console.log("Fruit:", fruit);
}

// 5. for...in loop (works with objects)
let user = { name: "Diana", age: 20, city: "Kyiv" };
for (let key in user) {
	console.log(`${key}: ${user[key]}`);
}

// 6. Nested loops
for (let i = 1; i <= 3; i++) {
	for (let j = 1; j <= 2; j++) {
		console.log(`i = ${i}, j = ${j}`);
	}
}

// 7. Breaking a loop
for (let i = 1; i <= 10; i++) {
	if (i === 5) {
		console.log("Breaking the loop at i =", i);
		break;
	}
	console.log(i);
}

// 8. Skipping an iteration
for (let i = 1; i <= 5; i++) {
	if (i === 3) {
		console.log("Skipping number 3");
		continue;
	}
	console.log(i);
}
