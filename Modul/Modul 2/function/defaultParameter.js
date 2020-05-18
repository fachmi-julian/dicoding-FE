//==================Regular Function========================
// function sayHello(name = "Stragger", greet = "Hello") {
//     console.log(`${greet} ${name}`);
// }

// sayHello("Dimmas", "Hai");
// sayHello();
/* output:
Hai Dimas!
Hello Stranger!
*/


//====================Arrow Function=======================
const sayHello = (name = "Stragger", greet = "Hello") => console.log(`${greet} ${name}`);


sayHello("Dimmas", "Hai");
sayHello();

/* output:
Hai Dimas!
Hello Stranger!
*/