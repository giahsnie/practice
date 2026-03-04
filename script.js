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
