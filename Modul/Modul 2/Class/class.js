//================================A Class Before ES6====================
// function  Car(manufacture, color) {
//     this.manufacture = manufacture;
//     this.color = color;
//     this.enginesActive = false;
// }

// Car.prototype.startEngines = function () {
//     console.log('Mobil dinyalakan...');
//     this.enginesActive = true;
// };

// Car.prototype.info = function () {
//     console.log("Manufacture " + this.manufacture);
//     console.log("Color" + this.color);
//     console.log("Engine: " + (this.enginesActive ? "Active" : "Inactive"))
// }

// var jhonCar = new Car("Honda", "Red");
// jhonCar.startEngines();
// jhonCar.info()

// /* output: 
// Mobil dinyalakan...
// Manufacture: Honda
// Color: Red
// Engines: Active
// */


//============================ES6 Classes=========================

class Car {
    constructor(manufacture, color) {
        this.manufacture = manufacture;
        this.color = color;
        this.enginesActive = false;
    }

    startEngines() {
        console.log('Mobil Dinyalakan');
        this.enginesActive = true;
    }

    info() {
        console.log(`Manufacture: ${this.manufacture}`);
        console.log(`Color:  ${this.color}`);
        console.log(`Engines: ${this.enginesActive ? "Active" : "Inactive"}`);
    }

}

const johnCar = new Car("Honda", "Red");
johnCar.startEngines();
johnCar.info();

/* output: 
Mobil dinyalakan...
Manufacture: Honda
Color: Red
Engines: Active
*/