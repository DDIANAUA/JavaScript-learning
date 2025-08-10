"use strict";

// Creating objects
let user = {
  name: "Diana",
  age: 20,
  isStudent: true
};

let user2 = new Object();
user2.name = "John";
user2.age = 25;

// Accessing properties
console.log(user.name);       // dot notation
console.log(user["age"]);     // bracket notation

// Adding and modifying properties
user.city = "Kyiv";
user.age = 21;
console.log(user);

// Deleting properties
delete user.isStudent;
console.log(user);

// Iterating over properties
for (let key in user) {
  console.log(key + ": " + user[key]);
}

// Built-in object methods
console.log(Object.keys(user));    // array of keys
console.log(Object.values(user));  // array of values
console.log(Object.entries(user)); // array of [key, value] pairs

// Copy an object
let copy = Object.assign({}, user);
console.log(copy);