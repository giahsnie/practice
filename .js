// this is a comment
let x = 5;
x; // let is used to declare a variable named x and assign it the value 5
let y = 6;
let z = 10;
let result = y + y / z;
console.log(result); // Statement- Output: 6.6

//variables using let
let fname = "John";
let lname = "Doe";
console.log(fname + " " + lname);

let a, b, c;
a = 5; // a is assigned the value 5
b = 10; // b is assigned the value 10
c = a + b; // c is assigned the sum of a and b
console.log(c);

//variables using const
const add = (num1, num2) => {
  return num1 + num2;
};
console.log(add(3, 4));

const subtract = (num1, num2) => {
  return num1 - num2;
};
console.log(subtract(5, 2));

const address = {
  street: "123 Main St", // street is a property of the address object
};
console.log(address.street); // Output: 123 Main St

const person = {
  name: "Alice", // name is a property of the person object
  age: 30, // age is a property of the person object
};
console.log(person.name); // Output: Alice
console.log(person.age); // Output: 30

//variables using var
var num1 = 10; // var is used to declare a variable named num1 and assign it the value 10
var num2 = 20; // var is used to declare a variable named num2 and assign it the value 20
var sum = num1 + num2; // var is used to declare a variable named sum and assign it the sum of num1 and num2
console.log(sum); // Output: 30

//variables using let, const, and var
const dateofBirth = "1990-01-01"; // const is used to declare a constant variable named dateofBirth and assign it the value "1990-01-01"
let currentYear = 2024; // let is used to declare a variable named currentYear and assign it the value 2024
var message = "Hello, World!"; // var is used to declare a variable named message and assign it the value "Hello, World!"
console.log(dateofBirth);

// 1. Setup the variables
const lattePrice = 5;
const muffinPrice = 3;
const discount = 2;
const taxRate = 0.1;

// 2. Calculate the subtotal (Latte + Muffin)
let subtotal = lattePrice + muffinPrice;

// 3. Subtract the discount
let discountedTotal = subtotal - discount;

// 4. Calculate the final bill including 10% tax
// Hint: Final = discountedTotal + (discountedTotal * taxRate)
let finalBill = discountedTotal + discountedTotal * taxRate;

console.log("Your total is: $" + finalBill);

// 1. Setup the variables -- practice with let and const
let score = 500;
let levelsWon = 3;
let livesLost = 2;

// The Math
score = (score + levelsWon * 100 - livesLost * 50) * 2;

console.log(score); // 1400

// Keyboard - Variables (practice with let and const)
let keyboard = 80;
let mouse = 40;
let totalDiscount = 30;
let shipping = 10;

let total = keyboard + mouse - totalDiscount;
let finalTotal = total + shipping;

console.log("Your final total is: $" + finalTotal);

// Trip Cost Calculator - Variables (practice with let and const)
let distance = 300; //miles trip long
let milesPerGallon = 30; //miles per gallon
let PricePerGallon = 4; //dollars per gallon
let headcount = 4; //number of people in the car

let gallonsNeeded = distance / milesPerGallon; //gallons needed for the trip
let totalCost = gallonsNeeded * PricePerGallon; //total cost of the trip
let totalCostPerPerson = totalCost / headcount; //total cost per person

console.log("Each person owes:$" + totalCostPerPerson); //Output: Each person owes:$10

//Sample for Operations with Variables
const morningSteps = 4000;
const afternoonSteps = 2500;
const goalSteps = 5000;
const medalRequirement = 1000;

let totalSteps = morningSteps + afternoonSteps;
let StatusGoal = totalSteps - goalSteps;
let medalStatus = Math.floor(totalSteps / medalRequirement);
let leftToMedal = totalSteps % medalRequirement;

console.log(totalSteps);
console.log(StatusGoal);
console.log(medalStatus);
console.log(leftToMedal);

// Sample for Comparison Operators
let age = 15;

// "Is age greater than or equal to 10 AND less than or equal to 20?"
let isTeenager = age >= 10 && age <= 20;

console.log(isTeenager); // true

//Sample for Comparison and Logical Operators
let userAge = 16;
let hasParent = true;
let ticketPrice = 12;
let userMoney = 15;

let userOlder = userAge >= 17 || hasParent; // user is older than 17 or has a parent
let canBuyTicket = userMoney >= ticketPrice; // user has enough money to buy the ticket

console.log("Can this person buy a ticket? " + (userOlder && canBuyTicket)); // Output: Can this person buy a ticket? true

let currentTemperature = 20; // Temperature in degrees Celsius
let targetTemperature = 24; // Target temperature for the day
let isPowerSavingMode = false; // Whether power-saving mode is off

if (currentTemperature > targetTemperature)
  console.log("It's too hot! Turn on the AC.");
else if (currentTemperature < targetTemperature)
  console.log("Temperature Perfect!.");
else console.log("AC turned off!");
