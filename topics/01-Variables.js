// ===== VARIABLES =====

// var — old way, avoid using
var oldVar = 'I am var';
console.log(oldVar);

// let — can be reassigned
let userName = 'Diana';
userName = 'Anna';
console.log(userName);

// const — cannot be reassigned
const age = 20;
// age = 21; Error
console.log(age);


// ===== DATA TYPES =====

let text = "Hello";          // string
let number = 42;             // number
let isOnline = true;         // boolean
let empty = null;            // null
let notDefined;              // undefined
let user = { name: "Diana" }; // object
let items = [1, 2, 3];       // array (also object)
let sayHi = function() {};   // function

console.log(typeof text);       // "string"
console.log(typeof notDefined); // "undefined"
console.log(typeof user);       // "object"


// ===== TYPE CONVERSION =====

// To string
let num = 100;
let str1 = String(num);

// To number
let strNum = "42";
let num1 = Number(strNum);
let num2 = +strNum;

// To boolean
console.log(Boolean(0));        // false
console.log(Boolean("hello")); // true
console.log(Boolean(null));    // false
console.log(Boolean(""));      // false
console.log(Boolean(" "));      // true


// ===== OPERATORS =====

// Arithmetic
let a = 10;
let b = 3;
console.log(a + b);  // 13
console.log(a - b);  // 7
console.log(a * b);  // 30
console.log(a / b);  // 3.333...
console.log(a % b);  // 1
console.log(a ** b); // 1000

// Comparison
console.log(5 == '5');   // true (loose equality)
console.log(5 === '5');  // false (strict equality)
console.log(7 > 3);      // true
console.log(2 <= 2);     // true

// Logical
console.log(true && false); // false
console.log(true || false); // true
console.log(!true);         // false
