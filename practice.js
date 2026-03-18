// Conditional Statements Practice
let age = 65;
let isStudent = false;
let baseFare = 15;

if (isStudent || age >= 65) {
  let discountedFare = baseFare * 0.20; // 50% discount
let discountFare =baseFare - discountedFare;
    console.log("Discounted Fare: $" + discountFare.toFixed(2));
}   else {
    console.log("Regular Fare: $" + baseFare.toFixed(2));
}

let currentHour = 10; 
let dayOfWeek = 0; // Sunday

if (dayOfWeek === 0 || dayOfWeek === 6) {
  console.log("It's the weekend! Enjoy your day off.");
} else if (currentHour < 8 || currentHour > 18) {
  console.log("Close : We are open from 8 AM to 6 PM.") ;
} else {
  console.log("Open : Welcome to our store!");
}

const isRaining = true;
const hasUmbrella = (false);
if (isRaining && !hasUmbrella) {
  console.log("You might get wet! Consider taking an umbrella.");
}   else if (isRaining && hasUmbrella) {
  console.log("You are prepared for the rain! Stay dry.");
}

let x =555555555n ;
let y = 111111111n;
let sum = x + y;
console.log("The sum of x and y is: " + sum);


//boolean logic practice - Weekend or Holiday Check

const isWeekend = true;
const isHoliday = false;
if (isWeekend || isHoliday) {
    console.log("It's a day off! Enjoy your time.");
} else {
    console.log("It's a workday. Time to be productive!");
}

const car = {
  type: "Fiat",
  model: "500",
  color: "white"
};
console.log(car.type); // Output: Fiat
console.log(car.model); // Output: 500
console.log(car.color); // Output: white    

const person = {
  name: "Alice",
  age: 30,
    city: "New York"    
};
delete person["age"];
console.log(person); // Output: { name: 'Alice', city: 'New York' }

const car2 = {
    make: "Toyota",
    model: "Camry",
    year: 2020
};

function updateCarModel(car, newModel) {
    car.model = newModel;
}
delete car2.year;
console.log(car2); // Output: { make: 'Toyota', model: 'Camry' }

function sayHello(name) {
    console.log("Hello, " + name + "!");
}

sayHello("John");
sayHello("Jane");

function greetings(name) {
    console.log("Hello, " + name + "!");
}

greetings("Welcome to JavaScript programming!");

function fullName(firstName, lastName) {
  return firstName + " " + lastName;
}

let name = fullName("John", "Doe");
console.log(name); // Output: John Doe

function getWelcomeMessage(name, batangas) {
    return "Welcome, " + name + "! You are from " + batangas + ".";
}

let message = getWelcomeMessage("Alice", "Batangas 123");
console.log(message); // Output: Welcome, Alice! You are from Batangas 123.

function validateReport(report) {
    if (report.title && report.description && report.severity) {
        return "Report is valid.";
    } else {
        return "Report is invalid. Please provide all required fields.";
    }
}
   