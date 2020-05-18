const {coffeeStock, isCoffeeMakerReady} = require('./state');

const makeCoffee = (type, miligrams) => {
    if (coffeeStock[type] >= miligrams) {
        console.log("Kopi berhasil dibuat");
    } else {
        console.log("Biji kopi habis")
    }
}

console.log(isCoffeeMakerReady)

makeCoffee("robusta",200);