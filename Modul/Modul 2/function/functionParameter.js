//=================with Parameter=================
// const sayHello = (name, greet) => console.log(`${greet}, ${name}!`);

// sayHello("Dimas","Selamat Pagi");
// /* output:
// Selamat Pagi, Dimas!
// */

//================Tanpa Parameter=====================
// const sayHello = () => console.log(`Selamat Pagi Semuanya!`);

// sayHello();
// /* output:
// Selamat pagi semuanya!
// */

//===============Block Body Function====================
const sayHello = language => {
    if (language.toUpperCase() === "INDONESIA") {
        return "Selamat Pagi!"
    } else {
        return "Good Morning"
    }
}
console.log(sayHello("INDONESIA"))

