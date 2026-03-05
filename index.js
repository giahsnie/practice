//sting practice - validating and masking a credit card number

const rawCardInput = "  4121-5588-2233-9876  ";
const trimmedCardInput = rawCardInput.trim();
console.log(trimmedCardInput); // Output: "4121-5588-2233-9876"
const cleanCardNumber = rawCardInput.replace(/\s|-/g, "");
console.log(cleanCardNumber); // Output: "4121558822339876"
const lengthOfCardNumber = cleanCardNumber.length;
console.log(lengthOfCardNumber); // Output: 16
if (lengthOfCardNumber === 16) {
  console.log("Valid card number: Sucessfully processed!");
} else if (lengthOfCardNumber < 16) {
  console.log("Invalid card number: Card number is too short");
} else {
  console.log("Invalid card number: Card number is too long");
}
const lastFour = cleanCardNumber.slice(-4);
const maskedCardNumber = `**** **** **** ${lastFour}`;
console.log(maskedCardNumber); // Output: "**** **** **** 9876"
