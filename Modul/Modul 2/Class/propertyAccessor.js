//=====================Property Accessor================
// class Car {
//     constructor(manufacture, color) {
//         this.manufacture = manufacture;
//         this.color = color;
//         this.enginesActive = false;
//     }
// }

// const johnCar = new Car("Honda", "Red");
// console.log(`Warna Mobil: ${johnCar.color}`);

// johnCar.color = "white";
// console.log(`Warna Mobil: ${johnCar.color}`);

//=======================Getter Setter====================
class Car {
    constructor(manufacture, color) {
        this.manufacture = manufacture;
        this._color = color;
        this.enginesActive = false;
    }

    get color() {
        return `Warna Mobil ${this._color}`;
    }

    set color(value) {
        console.log(`Warna mobil di ubah dari ${this.color} menjadi ${value}`);
        this._color = value;
    }
}

const johnCar = new Car("Honda", "Red");
console.log(johnCar.color);
johnCar.color = "White";
console.log(johnCar.color);

