// //copy by reference
// let developer1 = {
//     name: 'Bob',
//     age: 28,};


// //let developer2 =  {...developer1} //copy by value

// let developer2  = {...developer1} //copy by value
// developer2.name = 'Alice'; // Change the name property of developer2

// console.log(developer1); // Output: { name: 'Bob', age: 28 }
// console.log(developer2); // Output: { name: 'Alice', age: 28 }


// const phone1 = {
//     brand: 'Apple',
//     model: 'iPhone 13',
//     price: 999,
// };

// const phone2 = { ...phone1 }; // Create a copy of phone1 using the spread operator
// phone2.model = 'iPhone 14'; // Change the model property of phone2  

// console.log( phone1 + '' + phone2);
// console.log(phone1); // Output: { brand: 'Apple', model: 'iPhone 13', price: 999 }
// console.log(phone2); // Output: { brand: 'Apple', model: 'iPhone 14', price: 999 }


// let developer1 = {
//     name: 'John',
//     age: 30,
//     isSTudent: false,
//     skills: ['JavaScript', 'React', 'Node.js'],
//     calculateAge: function() {
//         joiningDate = 2015;
//         return new Date().getFullYear() - joiningDate;
//     }   
// };

// let developer2 = { ...developer1 }; // Create a copy of developer1 using the spread operator
// developer2.name = 'Alice'; // Change the name property of developer2
// developer2.skills.push('Python'); // Add a new skill to the skills array of developer2  

// console.log(developer1 );
// console.log(developer2);



