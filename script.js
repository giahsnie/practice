//If else statement practice - Temperature Check
let currentTemperature = 28; // Temperature in degrees Celsius
let targetTemperature = 24; // Target temperature for the day
let isPowerSavingMode = false; // Whether power-saving mode is off

if (currentTemperature > targetTemperature)
  console.log("It's too hot! Turn on the AC.");
else if (currentTemperature < targetTemperature)
  console.log("Temperature Perfect!.");
else console.log("AC turned off!");

//If else statement practice - ATM Machine
let correctPin = "1234";
let enteredPin = "1234";
let accountBalance = 5000;
let withdrawalAmount = 1000;

if (enteredPin === correctPin) {
  if (correctPin === enteredPin && withdrawalAmount <= accountBalance) {
    console.log(
      "Successful! Please take your cash: $" +
        (accountBalance - withdrawalAmount),
    );
  } else if (correctPin === enteredPin && withdrawalAmount > accountBalance) {
    console.log(
      "Insufficient funds. Your current balance is: $" + accountBalance,
    );
  }
} else {
  console.log("Incorrect PIN. Please try again.");
}

//boolean logic practice - Alarm
let isSystemArmed = true;
let doorOpen = true;
let isCorrectKeyUsed = false;

if (isSystemArmed && doorOpen && !isCorrectKeyUsed) {
  console.log("Alarm triggered! Intruder alert!");
}

//boolean logic practice - Discount Eligibility
const isStudent = true;
const isMember = false;

if (isStudent || isMember) {
  console.log("You are eligible for a discount!");
}

//Function practice - Greeting and Area Calculation
function sayHello(name) {
  console.log("Hello," + name + "!");
}

sayHello("John");
sayHello("Jane");

function calculateArea(radius) {
  const area = Math.PI * radius * radius;
  return area;
}

const circleArea = calculateArea(5);
console.log("The area of the circle is: " + circleArea.toFixed(2));

function Address(street, city) {
  console.log("Street: " + street);
  console.log("City: " + city);
}
Address("123 Main St", "Anytown");

//If else statement practice - Age Check
let age = 18;
if (age > 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

//sample code for function & boolean logic practice

for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}

for (let i = 1; i <= 10; i++) {
  if (i === 8) {
    break; // Skip even numbers
  }
  console.log(i);
}
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue; // Skip even numbers
  }
  console.log(i);
}

//sample code for loop practice - Admin
const users = [
  { name: "Alice", isAdmin: true },
  { name: "Bob", isAdmin: false },
  { name: "Charlie", isAdmin: true },
  { name: "David", isAdmin: false },
];
for (let i = 2; i < users.length; i++) {
  if (users[i].isAdmin) {
    console.log(users[i].name + " is an admin.");
  } else {
    console.log(users[i].name + " is not an admin.");
  }
}

//sample code for loop practice - Shopping Cart Total
const shoppingCart = [
  { name: "Wireless Mouse", price: 25 }, // Item 1
  { name: "Monitor", price: 150 }, // Item 2
  { name: "HDMI Cable", price: 15 }, // Item 3
  { name: "Mechanical Keyboard", price: 80 }, // Item 4
];

let totalBill = 10;
for (let i = 0; i < shoppingCart.length; i++) {
  totalBill += shoppingCart[i].price;
}
console.log("Total Bill: $" + totalBill);

//sample code for loop practice - Coupon Distribution
const guestList = [
  { name: "Alice", VIP: true },
  { name: "Bob", Regular: true },
  { name: "Charlie", VIP: true },
  { name: "David", Regular: true },
];

let totalCouponsValue = 0;
for (let i = 0; i < guestList.length; i++) {
  if (guestList[i].VIP) {
    totalCouponsValue += 20; // VIP guests get a $20 coupon
  }

  if (guestList[i].Regular) {
    totalCouponsValue -= 10; // Regular guests get a $10 coupon
  }
}
console.log("Total Coupons Value: $" + totalCouponsValue);

//while loop practice - Countdown Timer
let countdown = 10;
while (countdown > 0) {
  console.log(countdown);
  countdown--;
  do {
    console.log(countdown);
    countdown--;
  } while (countdown > 0);
}

let input = "42";
let converted = Number(input); 

console.log(converted + 8); // 50
console.log(Number("42.5")); // 42.5
console.log(Number("abc")); // NaN

let num1 = 10;
let num2 = 20;
let sum = num1 + num2;
console.log("The sum is: " + sum);

let score = 85.5;
let roundedScore = Math.round(score);
console.log("Rounded Score: " + roundedScore);

function calculateTotal(priceString, taxRate) {
    // 1. Convert the string to a number (using parseFloat)
    let price = parseFloat(priceString);
    
    // 2. Check if the conversion failed (in case the user typed letters)
    if (isNaN(price)) {
        return "Invalid Price";
    }

    // 3. Calculate the tax
    let tax = price * taxRate;
    let total = price + tax;

    // 4. Use .toFixed(2) to force exactly 2 decimal places (cents)
    // NOTE: .toFixed() returns a STRING, perfect for displaying in your UI.
    return total.toFixed(2);
}

// Try it out:
let itemPrice = "19.99"; // String from an input
let tax = 0.12;         // 12% Tax

console.log("Your total is: P" + calculateTotal(itemPrice, tax)); 
// Output: "Your total is: P22.39"

let num = 5.6 || 2; // Using bitwise OR to truncate decimal
console.log(num); // Output: 5

  const READ = 1; // 001 in binary
  const WRITE = 2;
  const EXECUTE = 4;

  let permissions = READ | WRITE;
  console.log(permissions); // Output: 3 (001 | 010 = 011)

let hasWritePermission = (permissions & WRITE) !== 0;
console.log(hasWritePermission); // Output: true

let hasExecutePermission = (permissions & EXECUTE) !== 0;
console.log(hasExecutePermission); // Output: false

let bitwiseResult = 5 & 3; // 0101 & 0011
console.log(bitwiseResult); // Output: 1 (0001 in binary)   
let monthlysalary = 30e3; // 30,000 in scientific notation
console.log("Age: " + age);
console.log("Monthly Salary: " + monthlysalary);
