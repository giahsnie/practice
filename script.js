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

let isSystemArmed = true;
let doorOpen = true;
let isCorrectKeyUsed = false;

if (isSystemArmed && doorOpen && !isCorrectKeyUsed) {
  console.log("Alarm triggered! Intruder alert!");
}
