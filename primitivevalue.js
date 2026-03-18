// // // // const userName1 = 'Bob';
// // // // const userName2 = userName1; // Copy by value
// // // // console.log(userName1); // Output: Bob
// // // // console.log(userName2); // Output: Bob  

// // // let count = 10;
// // // undefinedCount = count; // Copy by value
// // // console.log(count);
// // // console.log(undefinedCount); // Output: 10

// // // undefinedCount = 20;
// // // console.log(count); // Output: 10
// // // console.log(undefinedCount); // Output: 20

// // let user = {
// //     name:'Sam'
// // }

// // let userName= user; // Copy by reference
// // userCopy.name = 'Alex'; // Change the name property of userCopy

// // console.log(user); // Output: { name: 'Alex' }
// // console.log(userName); // Output: { name: 'Alex' }

// function sayHello(name) {
//     console.log(`Hello, ${name}!`);
// }

// // sayHello("John");
// // sayHello("Jane");

// // name1 = "Alice";
// // name2 = name1;  
// // console.log(name1); // Output: Alice

// // function sum(a, b) {
// //     console.log(b);
// // return a + b; // Return the sum of a and b
// // }

// // sum(5, 10); // Output: 10

// // const car = { brand: "Toyota" };

// // // Add new key-value pair
// // // car.model = "Corolla";
// // // car["year"] = 2024;

// // // // Update existing value
// // // car.brand = "Honda";

// // // console.log(car);
// // // // Output: { brand: "Honda", model: "Corolla", year: 2024 }


// // const FirstName1 = "John";
// // const LastName1 = "Doe";
// // let age1 = 30;
// // const isStudent1 = true;
// // const fullName1 = FirstName1 + " " + LastName1;

// // console.log(fullName1 + " is " + age1 + " years old" + (isStudent1 ? " and he is a student." : "")); // Output: John Doe is 30 years old. and is a student.

// // const FirstName2 = "John";
// // const LastName2 = "Doe";
// // let age2 = 25;
// // const isStudent2 = false;
// // const fullName2 = FirstName2 + " " + LastName2;
// // console.log(fullName2 + " is " + age2 + " years old" + (isStudent2 ? " and he is a student." : "")); // Output: John Doe is 25 years old. and is not a student.

// // console.log(fullName2); // Output: John Doe


// //primitive type example - Number
// let number = {value: 10}; // Create an object with a property 'value' set to 10

// function increase(number) {
//   number.value ++; // Modify the value property of the object
// }

// increase(number);
// console.log(number.value); // Output: 11 (the value property of the object has been modified)


// //reference type example - Object
// let obj = {value: 10};
// function increase(obj) {
//     obj.value ++; // This will not affect the original object outside the function
// }

// increase(obj);
// console.log(obj.value); // Output: 10 (the original object remains unchanged)

// const num1 = 5; // Primitive type
// const num2 = num1;
// console.log(num1); // Output: 5


// const fruit = ["apple", "banana", "orange"]; // Reference type
// const fruitCopy = fruit; // Copy by reference
// fruitCopy.push("melon"); // Modify the array through the copy
// console.log(fruit); // Output: ["apple", "banana", "orange", "melon"] (the original array is modified)

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }
// function CreateCircle(radius) {
//     return {
//         radius,
//         draw() {
//             console.log("Drawing a circle with radius " + this.radius);
//         }
//     };
// }
// const circle1 = CreateCircle(5);
// circle1.draw(); // Output: Drawing a circle with radius 5


// const bags = ["backpack", "handbag", "suitcase"];
// const bagsCopy = bags;
//  const myBag = bagsCopy[0]; // Access the first element of the array
//  console.log(myBag); // Output: backpack (the first element of the array)



//  //OBJECTS THIS
// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     id: 123,
//     fullName: function() {
//         return this.firstName + " " + this.lastName + " ID: " + this.id;
//      // Return the full name by concatenating firstName and lastName
//      //this refers to the current object (person) and allows us to access its properties
//     }
// };

// const member = {
//     name: "Alice",
//     lastName: "Smith",
//     id: 456,
//     fullName: function() {  
//         return this.name + " " + this.lastName + " ID: " + this.id;
//     }
// };
// console.log(member.fullName());

//object iteration
// const user = {
//     name: "Bob",
//     age: 30,
//     city: "New York"
// };
// let userInfo = "";
// for (let key in user) {
//     userInfo += key + ": " + user[key] + "\n"; // Concatenate key and value to userInfo string
// }
// console.log(userInfo); // Output: name: Bob age: 30 city: New York (each key-value pair on a new line)

// // const fruits = ["apple", "banana", "orange"]; // banana is index 1, orange is index 2

// // let fruitList = ""; // Initialize an empty string to store the fruit list                           
// // for (let index in fruits) {  //index is the variable that will hold the current index of the array during each iteration                    
// //     fruitList += index + ": " + fruits[index] + "\n"; // Concatenate index and value to fruitList string  //\n adds a new line after each fruit
// // }
// // console.log(fruitList); // Output: 0: apple 1: banana 2: orange (each index-value pair on a new line)   

// const car = {
//     make: "Toyota",
//     model: "Corolla",
// };                  
// let carInfo = "";
// for (let key in car) {
//     carInfo += key + ": " + car[key] + "\n"; // Concatenate key and value to carInfo string
// }   
// console.log(carInfo); // Output: make: Toyota model: Corolla (each key-value pair on a new line)


// obj = {
//     Name: "Alice",
//     Age: 25,
//     Gender: "Female"
// };
// let strfyObj = JSON.stringify(obj); // Convert the object to a JSON string
// console.log(strfyObj); // Output: {"Name":"Alice","Age":25,"Gender":"Female"}
 
// // let parsedObj = JSON.parse
// // (strfyObj); // Convert the JSON string back to an object
// // console.log(parsedObj); // Output: { Name: 'Alice', Age: 25, Gender: 'Female' }

// // //object entries
// // const user = {
// //     name: "Bob",    
// //     age: 30,
// //     city: "New York"
// // };
// // const entries = Object.entries(user);   
// // console.log(entries); // Output: [ ['name', 'Bob'], ['age', 30], ['city', 'New York'] ] (an array of key-value pairs)



// //scope example for global and local variables
// // function1(); // Output: 10  // Call function1 to execute its code and print the value of x
// // function2(); // Output: 20  // Call function2 to execute its code and print the value of y
// // function function1() {  // Define function1
// //         let x =1;
// //     console.log(x); // Output: 10

// // }
// // function function2() {
// //     let y = 2;
// //     console.log(y); // Output: 20
// // }

// const globalVar = "global"; // Declare a global variable

// function myFunction() {
//     const localVar = "local";
//     console.log(globalVar); // Output: global (accessing the global variable)
//     console.log(localVar); // Output: local (accessing the local variable)
// }

// //codeblock example
// function codeBlockExample() {
//     let x = 10; // Declare a variable x and assign it the value 10
//     if (x > 5) { // Check if x is greater than 5
//         let y = 20; // Declare a variable y inside the if block and assign it the value 20
//         console.log(x); // Output: 10 (accessing variable x inside the block)
// //         console.log(y); // Output: 20 (accessing variable y inside the block)
// //     }
// // }

// // //hoisting example
// // console.log(hoistedVar); // Output: undefined (hoistedVar is declared but not initialized yet)
// // var hoistedVar = "I am hoisted"; // Declare and initialize hoistedVar
// // console.log(hoistedVar); // Output: I am hoisted (accessing the hoisted variable after initialization)

// // console.log(functionVar);
// // var functionVar = "This is a hoisted variable"; // Declare and initialize a variable named 'function'
// // console.log(functionVar); // Output: This is a hoisted variable (accessing the variable named 'function' after initialization)

// //Js strict mode example
// "use strict"; // Enable strict mode
// myFunction(); 
// function myFunction() {
// y = 10; // Assign a value to y without declaring it first
// console.log(y); // Output: 10 (y is hoisted and becomes a global variable)  
// }

// //converting mistake to error with strict mode
// "use strict"; // Enable strict mode
// let name = "Alice"; // Declare a variable named 'name'
// console.log(name);

// const d = new Date(); // Create a new Date object
// console.log(d.toDateString()); // Output: (current date in a readable format)

const cars = [];
cars[0] = "Toyota";
cars[1] = "Honda";
cars[2] = "Ford";
let myList = cars.toString(); // Convert the array to a string
let size = cars.length; // Get the length of the array
console.log(myList); // Output: Toyota,Honda,Ford (the array elements as a comma-separated string)
console.log("Number of cars: " + size); // Output: Number of cars: 3
console.log(cars[0]); // Output: Toyota (the first element of the array)    



