// this is a comment
let x = 5; // let is used to declare a variable named x and assign it the value 5
let y = 6;
let z = 10;
let result = y + y / z;
console.log(result); // Statement- Output: 6.6

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
