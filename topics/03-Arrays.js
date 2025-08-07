// ===== Creating arrays =====
let arr1 = [1, 2, 3, 4, 5]; // Recommended way
let arr2 = new Array(1, 2, 3, 4, 5); // Less preferred

// ===== Accessing elements =====
console.log(arr1[0]); // First element

// ===== Rewriting elements =====
arr1[1] = "two";
console.log(arr1); // [1, "two", 3, 4, 5]

// ===== Array length and last element =====
console.log("Length of arr1: " + arr1.length);
let lastElement = arr1[arr1.length - 1];
console.log("Last element is " + lastElement);


// ===== Array Methods =====
const vegetables = [
  "Carrot",
  "Potato",
  "Tomato",
  "Cucumber",
  "Onion",
  "Garlic",
  "Cabbage",
  "Broccoli",
];

// --- push() — add to the end
vegetables.push("Cauliflower");
console.log("After push:", vegetables);

// --- pop() — remove from the end
vegetables.pop();
console.log("After pop:", vegetables);

// --- unshift() — add to the beginning
vegetables.unshift("Pepper");
console.log("After unshift:", vegetables);

// --- shift() — remove from the beginning
vegetables.shift();
console.log("After shift:", vegetables);

// --- splice() — add/remove at any position
vegetables.splice(1, 2, "Spinach", "Lettuce");
console.log("After splice:", vegetables);

// --- slice() — create a copy
let favouriteVegetables = vegetables.slice(0, 4);
console.log("Favourite vegetables (slice):", favouriteVegetables);

// --- concat() — combine arrays
let newVegetables = vegetables.concat("Zucchini", "Eggplant");
console.log("After concat:", newVegetables);


// ===== Search and check methods =====

// --- indexOf() — first occurrence
console.log("Index of 'Garlic':", vegetables.indexOf("Garlic"));

// --- lastIndexOf() — last occurrence
let testArray = ["Apple", "Banana", "Apple"];
console.log("Last index of 'Apple':", testArray.lastIndexOf("Apple"));

// --- includes() — check if value exists
console.log("Includes 'Cabbage':", vegetables.includes("Cabbage"));
console.log("Includes 'Mango':", vegetables.includes("Mango"));


// ===== Find & filter methods =====

// --- find() — first match based on condition
let longName = vegetables.find(veg => veg.length > 7);
console.log("First vegetable with name > 7 chars:", longName);

// --- findIndex() — index of first match
let indexLongName = vegetables.findIndex(veg => veg.length > 7);
console.log("Index of long-named vegetable:", indexLongName);

// --- filter() — get all matches
let shortNames = vegetables.filter(veg => veg.length <= 6);
console.log("Vegetables with name ≤ 6 chars:", shortNames);


// ===== Sorting & transforming =====

// --- sort() — alphabetically (changes original)
let sortedVegetables = vegetables.sort();
console.log("Sorted vegetables:", sortedVegetables);

// --- reverse() — reverse order (changes original)
let reversed = vegetables.reverse();
console.log("Reversed vegetables:", reversed);

// --- map() — create new array by transforming each element
let uppercased = vegetables.map(veg => veg.toUpperCase());
console.log("Uppercased vegetables:", uppercased);


// ===== split() and join() =====
let sentence = "carrot,potato,onion";
let splitArray = sentence.split(",");
console.log("Split by comma:", splitArray);

let joinedString = vegetables.join(" | ");
console.log("Joined with | :", joinedString);
