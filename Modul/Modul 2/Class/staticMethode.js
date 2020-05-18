class Vehicle {
    constructor(licensePlate, manufacture) {
        this.licensePlate = licensePlate;
        this.manufacture = manufacture;
        this.engineActive = false;
    }

    startEngine() {
        console.log(`Mesin kendaraan ${this.licensePlate} dinyalakan`);
    }

    info() {
        console.log(`Nomer kendaraan : ${this.licensePlate}`);
        console.log(`Manufacture: ${this.manufacture}`);
        console.log(`Mesin: ${this.engineActive ? "Active" : "inActive"}`);
    }

    parking() {
        console.log(`Kendaraan ${this.licensePlate} parkir!`);
    }
}

class Car extends Vehicle {
    constructor(licensePlate, manufacture, wheels) {
        super(licensePlate, manufacture);
        this.wheels = wheels;
    }

    droveOff() {
        console.log(`Kendaraan ${this.licensePlate} melaju!`)
    }

    openDoor(){
        console.log(`Membuka Pintu`);
    }

    info(){
        super.info();
        console.log(`Jumlah Roda ${this.wheels}`);
    }
}

class MotorCycle extends Vehicle{
    constructor(licensePlate, manufacture, wheels) {
        super(licensePlate, manufacture);
        this.wheels = wheels;
    }

    droveOff() {
        console.log(`Kendaraan ${this.licensePlate} melaju!`)
    }

    info(){
        super.info();
        console.log(`Jumlah Roda ${this.wheels}`);
    }
}



class VechileFactory {
    static repair(vehicles){
        vehicles.forEach(vehicle => {
            console.log(`Kendaraan ${vehicle.licensePlate} sedang melakukan perawatan`);
        });
    }
}

//const vechileFactory = new VechileFactory()
const jhonCar = new Car("H121S", "Honda", 4);
const tomMotor = new MotorCycle("GF121J", "Yamaha", 2);
const dimasCar = new Car("TA1408K", "Tesla", 4)
//vechileFactory.repair([jhonCar, tomMotor, dimasCar]);
VechileFactory.repair([jhonCar, tomMotor, dimasCar])