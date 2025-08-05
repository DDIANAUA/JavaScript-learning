// ===== CONDITIONAL STATEMENTS =====

// if...else statement
let age = 20;

if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

// === Shortened version with ternary operator ===
let isAdult = age >= 18 ? "Adult" : "Minor";
console.log(isAdult);


// ===== switch statement =====

let day = 3;
let dayName;

switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day";
}

console.log(`Today is ${dayName}.`);


// ===== Nested if statement =====

let temperature = 30;
let weather;

if (temperature > 35) {
    weather = "It's too hot!";
} else if (temperature > 20) {
    weather = "It's a nice day!";
} else {
    weather = "It's cold!";
}

console.log(weather);
