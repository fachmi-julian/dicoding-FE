//=====================Regular Function====================
// function People(name, age, hobby){
//     this.name = name;
//     this.age = age;
//     this.hobby = hobby;

// }

// const programmer = new People("Jhon",18, ["Coding", "Read Book", "Ping Pong"]);

// console.log(programmer.name);
// console.log(programmer.age);
// console.log(programmer.hobby);
// /* output:
// John
// 18
// [ 'Coding', 'Read book', 'Ping-pong' ]
// */



// function People(name, age, hobby){
//     this.name = name;
//     this.age = age;
//     this.hobby = hobby;

// }

// //Menambahkan IntroMySelf ke People
// People.prototype.introMySelf = function () {
//     // this -> People
//     setTimeout(function() {
//         //this-> ???
//         console.log(`Hello Nama Saya ${this.name}, umur saya ${this.age}.`);
//         console.log(`Hobby Saya adalah ${this.hobby}`);
//     },300)
// }

// const programmer = new People("John", 18, ["Coding", "Read book", "Ping-pong"]);
// programmer.introMySelf();


//=====================Arror Function===============
// const programmer = {
//     name: "Jhon",
//     age: 18,
//     hobby: ["Coding","Read Book", "Ping pong"]
// }

// console.log(programmer.name);
// console.log(programmer.age);
// console.log(programmer.hobby);
// /* output:
// John
// 18
// [ 'Coding', 'Read book', 'Ping-pong' ]
// */


function People(name, age, hobby){
    this.name = name;
    this.age = age;
    this.hobby = hobby;

}

//Menambahkan IntroMySelf ke People
People.prototype.introMySelf = function () {
    // this -> People
    setTimeout(() => {
        //this-> ???
        console.log(`Hello Nama Saya ${this.name}, umur saya ${this.age}.`);
        console.log(`Hobby Saya adalah ${this.hobby}`);
    },300)
}

const programmer = new People("John", 18, ["Coding", "Read book", "Ping-pong"]);
programmer.introMySelf();
