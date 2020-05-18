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

const car = new Car("H121S", "Honda", 4);
car.startEngine();
car.info();