//---------------------------------------------------------//
// const people = { name: "John", age: 18 }
// people.regency = "Bandung"
 
// console.log(people);
 
 
/* output
  { name: 'John', age: 18, regency: 'Bandung' }
*/

//---------------------------------------------------------//
// const fruits = ["apple", "orange"];
// fruits.push("banana");
 
 
// console.log(fruits);
 
/* output
[ 'apple', 'orange', 'banana' ] 
*/


//---------------------------------------------------------//
// const fruits = ["apple", "orange"];
// fruits = ["apple", "orange", "banana"];
 
 
// console.log(fruits);

/* output
TypeError: Assignment to constant variable. */

//---------------------------------------------------------//
// const name = "jhon";
// name = "Doe"

// console.log(name);
// Result:TypeError: Assignment to constant variable.

//---------------------------------------------------------//
// let name = "jhon";
// name = "Doe"

// console.log(name);
//Result: Doe



//---------------------------------------------------------//
// let name = "jhon";
// let name = "Doe";

// console.log(name);
//Result: Identifier 'name' has already been declared

//---------------------------------------------------------//
// const name = "jhon";
// const name = "Doe";

// console.log(name);
//Result: Identifier 'name' has already been declared

//---------------------------------------------------------//
// function makeTea(isCold) {
//     if (isCold) {
//         let tea = "Make it an Ice Tea"
//     } else {
//         let tea = "Make it a Hot Tea"
//     }
//     return tea;
// }

// console.log(makeTea(false));
//Result: ReferenceError: tea is not defined

//---------------------------------------------------------//
// function getFood() {
//     food = "Choocolate";
//     console.log(food);
//     let food;
// }

// getFood();