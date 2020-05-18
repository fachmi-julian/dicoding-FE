//=======================Destructuring Object================
// const profile = {
//     firstName: "Jhon",
//     lastName: "Doe",
//     age: 18
// }

// const {firstName, lastName, age} = profile;

// console.log(firstName, lastName, age);

/* output:
John Doe 18
*/

//=======================Destructuring Assignment================
// const profile = {
//     firstName: "Jhon",
//     lastName: "Doe",
//     age: 18
// }

// let firstName = "Dimas";
// let age = 20;

// ({firstName, age} = profile);

// console.log(firstName);
// console.log(age);
// /* output:
// John
// 18
// */

//=======================Default Values================
// const profile = {
//     firstName: "Jhon",
//     lastName: "Doe",
//     age: 18
// }

// const {firstName, age, isMale=20} = profile;

// console.log(firstName);
// console.log(age);
// console.log(isMale);
// /* output:
// John
// 18
// 20
// */

//=======================Assigning to Different Local Variable Names=====================
const profile = {
    firstName: "John",
    lastName: "Doe",
    age: 18
}

const {
    firstName: localFirstName,
    lastName: localLastName,
    age: localAge
} = profile;

console.log(localFirstName);
console.log(localLastName);
console.log(localAge);

/* output:
John
Doe
18
*/

