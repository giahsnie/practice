// const numbers = [1, 2, 3, 4, 5];
// let first = numbers.findIndex(myFunction);

// function myFunction(value, index, array) {
//     return value > 3;
// }                   
// console.log(first); // Output: 3 (the index of the first element greater than 3)


// const fruits = ["apple", "banana", "cherry"];
// fruits.sort();
// console.log(fruits); // Output: ["apple", "banana", "cherry"] (sorted alphabetically)
// fruits.reverse();
// console.log(fruits); // Output: ["cherry", "banana", "apple"] (reversed order)

const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = [];
numbers1.forEach(element => {
  if (myFunction(element)) {
    numbers2.push(element);
  }
});
function myFunction(value) {
  return value > 18;
}
console.log(numbers2); // Output: [45, 25] (elements greater than 18)