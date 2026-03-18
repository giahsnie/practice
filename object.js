// const person1 = {
//     name: 'John',
//     age: 30,
//     city: 'New York',

//     sayHello: function() {
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old. I live in ${this.city}.`);
//     },
//     eat: function(food) {
//         console.log(`${this.name} is eating ${food}.`);
//     }
// };



// const person2 = {
//     name: 'Alice',
//     age: 25,
//     city: 'Los Angeles',
//     sayHello: function() {
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old. I live in ${this.city}.`);
//     },
//     eat: function(food) {
//         console.log(`${this.name} is eating ${food}.`);
//     }
// };

// person1.sayHello();
// person2.sayHello();
// person1.eat('pizza'); // Output: John is eating pizza.




//object with parameters => arrow functions
person2.sayHello();
person2.eat('sushi'); // Output: Alice is eating sushi.

const add = (a, b) => a + b;
console.log(add(5, 3)); // Output: 8

const hello=(name, age) => `Hello, my name is ${name} and I am ${age} years old.`;
console.log(hello('Charlie', 35)); // Output: Hello, my name is Charlie and I am 35 years old.

hello('Charlie', 35); // Output: Hello, my name is Charlie and I am 35 years old.

//time functions with arrow functions
setTimeout(() => {
    console.log('This message is displayed after 2 seconds');
}, 2000);


//array functions with arrow functions
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map((element) =>Math.pow(element, 2));
const cubedNumbers = numbers.map((element) =>Math.pow(element, 3));
const evenNumbers = numbers.filter((element) => element % 2 === 0);
const oddNumbers = numbers.filter((element) => element % 2 !== 0);
const total = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(total); // Output: 15

